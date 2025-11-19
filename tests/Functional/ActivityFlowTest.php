<?php
namespace App\Tests\Functional;

use App\Entity\Activity;
use App\Entity\ActivityType;
use App\Entity\Theme;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ActivityFlowTest extends WebTestCase
{
    public static function setUpBeforeClass(): void
    {
        self::bootKernel();
        $em = self::getContainer()->get('doctrine')->getManager();
        $tool = new SchemaTool($em);
        $tool->dropDatabase();
        $metadata = $em->getMetadataFactory()->getAllMetadata();
        if ($metadata) { $tool->createSchema($metadata); }
        self::ensureKernelShutdown();
    }

    public function testListFilterAndDetail(): void
    {
        $client = static::createClient();
        $c = static::getContainer();
        /** @var EntityManagerInterface $em */
        $em = $c->get('doctrine')->getManager();

        // --- Fixtures minimales
        $thCreatif   = (new Theme())->setName('Créatif');
        $thScientif  = (new Theme())->setName('Scientifique');

        $tyPeinture  = (new ActivityType())->setName('Peinture');
        $tyExpSimple = (new ActivityType())->setName('Expérience simple');

        $a1 = (new Activity())
            ->setTitle('Peinture aux doigts')
            ->setImage('finger.png')
            ->setAgeGroup('0-2 ans')
            ->setObjective('Stimuler la créativité')
            ->setMaterials("Feuilles épaisses\nPeinture non toxique")
            ->setSteps("Préparer la table\nPeindre")
            ->setTips("Proposer des couleurs primaires")
            ->addTheme($thCreatif)
            ->addActivityType($tyPeinture);

        $a2 = (new Activity())
            ->setTitle('Vinaigre + bicarbonate')
            ->setImage('science.png')
            ->setAgeGroup('3-5 ans')
            ->setObjective('Découvrir une réaction simple')
            ->setMaterials("Vinaigre\nBicarbonate")
            ->setSteps("Mettre le bicarbonate\nAjouter le vinaigre")
            ->setTips("Faire dehors si possible")
            ->addTheme($thScientif)
            ->addActivityType($tyExpSimple);

        foreach ([$thCreatif,$thScientif,$tyPeinture,$tyExpSimple,$a1,$a2] as $e) { $em->persist($e); }
        $em->flush();

        $router = $c->get('router');
        $listUrl = $router->generate('app_activity');

        // --- 1) Page liste : on voit bien les deux activités
        $crawler = $client->request('GET', $listUrl);
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('.result-count', '2 Activités trouvées');
        $this->assertStringContainsString('Peinture aux doigts', $crawler->filter('body')->text());
        $this->assertStringContainsString('Vinaigre + bicarbonate', $crawler->filter('body')->text());
        $this->assertGreaterThanOrEqual(2, $crawler->filter('.activity-card')->count());

        // --- 2) Filtre (GET) : 3-5 ans + Scientifique + Expérience simple => ne garde que a2
        $query = http_build_query([
            'ageGroup' => '3-5 ans',
        ]);
        $crawler = $client->request('GET', $listUrl.'?'.$query);
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('.result-count', '1 Activités trouvées');
        $this->assertStringContainsString('Vinaigre + bicarbonate', $crawler->filter('body')->text());
        $this->assertStringNotContainsString('Peinture aux doigts', $crawler->filter('body')->text());

        // --- 3) Navigation "Découvrir" -> page détail
        $link = $crawler->selectLink('Découvrir')->link();
        $detail = $client->click($link);
        $this->assertResponseIsSuccessful();

        $page = $detail->filter('body')->text();
        $this->assertStringContainsString('Objectif',  $page);
        $this->assertStringContainsString('Matériel',  $page);
        $this->assertStringContainsString('Étapes',    $page);
        $this->assertStringContainsString('Conseils',  $page);
        $this->assertTrue(
            str_contains($page, 'Vinaigre + bicarbonate') || str_contains($page, 'Peinture aux doigts'),
            'Le titre de l’activité doit être présent sur la page détail.'
        );
    }
}
