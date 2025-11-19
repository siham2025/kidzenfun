<?php
// tests/Functional/HeaderButtonsTest.php
namespace App\Tests\Functional;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class HeaderButtonsTest extends WebTestCase
{
    public static function setUpBeforeClass(): void
    {
        self::bootKernel();
        $em = self::getContainer()->get('doctrine')->getManager();
        $tool = new SchemaTool($em);
        $tool->dropDatabase();
        $metadata = $em->getMetadataFactory()->getAllMetadata();
        if ($metadata) {
            $tool->createSchema($metadata);
        }
        self::ensureKernelShutdown();
    }

    public function testHeaderForAnonymousUser(): void
    {
        $client = static::createClient();
        $client->request('GET', '/'); // adapte si besoin
        $this->assertResponseIsSuccessful();

        $this->assertSelectorExists('.account-buttons .btn-login');
        $this->assertSelectorExists('.account-buttons .btn-register');
        $this->assertSelectorNotExists('.account-buttons .profile-link');
        $this->assertSelectorNotExists('.account-buttons .btn-logout');

        $this->assertSelectorExists('.main-nav .nav-account .nav-btn.nav-btn-primary');
        $this->assertSelectorExists('.main-nav .nav-account .nav-btn.nav-btn-outline');
        $this->assertSelectorNotExists('.main-nav .nav-account .nav-profile');
        $this->assertSelectorNotExists('.main-nav .nav-account .nav-logout button');
    }

    public function testHeaderForLoggedInUser(): void
    {
        $client = static::createClient();

        // 1) Persiste l'utilisateur, 2) flush, 3) clear, 4) re-fetch → entité managée avec ID garanti
        [$user, $em] = $this->createAndRefetchUser('test@example.com', 'test1234', true);

        // Sanity check
        $this->assertNotNull($user->getId(), 'Le user doit avoir un ID avant loginUser().');

        // ⚠️ précise le firewall "main" (celui de ton security.yaml)
        $client->loginUser($user, 'main');

        $client->request('GET', '/'); // adapte si besoin
        $this->assertResponseIsSuccessful();

        $this->assertSelectorExists('.account-buttons .profile-link');    // Mon profil
        $this->assertSelectorExists('.account-buttons .btn-logout');      // Déconnexion (bouton)
        $this->assertSelectorNotExists('.account-buttons a.btn-login');   // Connexion (lien <a>)
        $this->assertSelectorNotExists('.account-buttons .btn-register'); // Inscription


        $this->assertSelectorExists('.main-nav .nav-account .nav-profile');
        $this->assertSelectorExists('.main-nav .nav-account .nav-logout button');
        $this->assertSelectorNotExists('.main-nav .nav-account a.nav-btn.nav-btn-primary');
        $this->assertSelectorNotExists('.main-nav .nav-account a.nav-btn.nav-btn-outline');
    }

    public function testLogoutFlowIfConfigured(): void
    {
        $client = static::createClient();

        [$user, $em] = $this->createAndRefetchUser('logout@example.com', 'test1234', true);
        $this->assertNotNull($user->getId());

        $client->loginUser($user, 'main');

        $crawler = $client->request('GET', '/');
        $this->assertResponseIsSuccessful();

        $form = $crawler->filter('.logout-form')->form();
        $client->submit($form);

        $this->assertTrue($client->getResponse()->isRedirect());
        $client->followRedirect();

        $this->assertSelectorExists('.account-buttons .btn-login');
        $this->assertSelectorExists('.account-buttons .btn-register');
        $this->assertSelectorNotExists('.account-buttons .profile-link');
        $this->assertSelectorNotExists('.account-buttons .btn-logout');
    }

    /**
     * Crée un User, le persiste, flush, clear l’EM, puis le recharge depuis la BDD.
     * Retourne [User rechargé, EntityManager].
     */
    private function createAndRefetchUser(string $email, string $plainPassword, bool $verified = false): array
    {
        $container = static::getContainer();
        /** @var EntityManagerInterface $em */
        $em = $container->get('doctrine')->getManager();
        /** @var UserPasswordHasherInterface $hasher */
        $hasher = $container->get(UserPasswordHasherInterface::class);

        $user = new User();
        $user->setEmail($email);
        $user->setRoles(['ROLE_USER']);
        $user->setFirstName('Test');
        $user->setLastName('User');
        $user->setIsVerified($verified);

        $user->setPassword($hasher->hashPassword($user, $plainPassword));

        $em->persist($user);
        $em->flush();  // ID généré ici

        // Important : on vide l’EM puis on recharge l’entité depuis la BDD
        $em->clear();
        $user = $em->getRepository(User::class)->findOneBy(['email' => $email]);

        return [$user, $em];
    }
}
