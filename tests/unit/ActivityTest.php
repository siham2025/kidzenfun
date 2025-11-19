<?php
namespace App\Tests\Unit;

use App\Entity\Activity;
use App\Entity\ActivityType;
use App\Entity\Theme;
use PHPUnit\Framework\TestCase;

class ActivityTest extends TestCase
{
    public function testActivityEntityBehavior()
    {
        // Arrange (données de test)
        $activityType = (new ActivityType())->setName('Peinture');
        $theme        = (new Theme())->setName('Créatif');

        $materials = <<<TXT
Feuilles épaisses ou papier Canson
Peinture non toxique spéciale enfants

Blouse ou vieux t-shirt
Protection de table (nappe, journal)
Lingettes ou eau et serviette
TXT;

        $steps = <<<TXT
Préparer une surface protégée (nappe, journal, etc.)
Verser un peu de peinture dans des petits récipients
Inviter l’enfant à peindre librement avec ses doigts
Laisser sécher les créations
TXT;

        $tips = <<<TXT
Proposer plusieurs couleurs primaires
Prévoir un point d’eau ou des lingettes à portée de main
Encourager l’enfant à nommer les couleurs et les formes
TXT;

        // Act
        $activity = (new Activity())
            ->setTitle('Peinture aux doigts')
            ->setImage('finger-painting.png')
            ->setAgeGroup('0-2 ans')
            ->setObjective('Stimuler la créativité et la motricité fine')
            ->setMaterials($materials)   // -> string (multi-ligne)
            ->setSteps($steps)           // -> string (multi-ligne)
            ->setTips($tips);            // -> string (multi-ligne)

        // Par défaut false
        $this->assertFalse($activity->isDailyActivity());
        $activity->setIsDailyActivity(true);

        // Relations (API au singulier)
        $activity->addActivityType($activityType);
        $activity->addTheme($theme);

        // Assert – champs simples
        $this->assertSame('Peinture aux doigts', $activity->getTitle());
        $this->assertSame('finger-painting.png', $activity->getImage());
        $this->assertSame('0-2 ans', $activity->getAgeGroup());
        $this->assertSame('Stimuler la créativité et la motricité fine', $activity->getObjective());
        $this->assertSame($materials, $activity->getMaterials());
        $this->assertSame($steps, $activity->getSteps());
        $this->assertSame($tips, $activity->getTips());
        $this->assertTrue($activity->isDailyActivity());

        // Assert – helpers de découpage en lignes (vides filtrées, ordre conservé)
        $this->assertSame([
            "Feuilles épaisses ou papier Canson",
            "Peinture non toxique spéciale enfants",
            "Blouse ou vieux t-shirt",
            "Protection de table (nappe, journal)",
            "Lingettes ou eau et serviette",
        ], $activity->getMaterialsLines());

        $this->assertSame([
            "Préparer une surface protégée (nappe, journal, etc.)",
            "Verser un peu de peinture dans des petits récipients",
            "Inviter l’enfant à peindre librement avec ses doigts",
            "Laisser sécher les créations",
        ], $activity->getStepsLines());

        $this->assertSame([
            "Proposer plusieurs couleurs primaires",
            "Prévoir un point d’eau ou des lingettes à portée de main",
            "Encourager l’enfant à nommer les couleurs et les formes",
        ], $activity->getTipsLines());

        // Assert – relations ManyToMany
        $this->assertCount(1, $activity->getActivityTypes());
        $this->assertSame($activityType, $activity->getActivityTypes()->first());
        $this->assertCount(1, $activity->getThemes());
        $this->assertSame($theme, $activity->getThemes()->first());

        // Remove pour couvrir aussi les méthodes de suppression
        $activity->removeActivityType($activityType);
        $activity->removeTheme($theme);
        $this->assertCount(0, $activity->getActivityTypes());
        $this->assertCount(0, $activity->getThemes());
    }

    public function testSplitLinesOnNullReturnsEmptyArray()
    {
        $activity = new Activity();
        $this->assertSame([], $activity->getMaterialsLines());
        $this->assertSame([], $activity->getStepsLines());
        $this->assertSame([], $activity->getTipsLines());
    }
}
