<?php
namespace App\Tests\Unit;

use App\Entity\Theme;
use App\Entity\Activity;
use App\Entity\ActivityType;
use PHPUnit\Framework\TestCase;

class ActivityTest extends TestCase
{
public function testActivity()
    {
        $activityType = new ActivityType();
        $activityType->setName('Peinture');

        $theme = new Theme();
        $theme->setName('Créatif');

        $activity = new Activity();
        $activity
            ->setTitle('Peinture aux doigts')
            ->setImage('finger-painting.png')
            ->setAgeGroup('0-2 ans')
            ->setDescription([
                'objectif' => 'Stimuler la créativité et la motricité fine',
                'étapes' => [
                    'Préparer une surface protégée (nappe, journal, etc.)',
                    'Verser un peu de peinture dans des petits récipients',
                    'Inviter l’enfant à peindre librement avec ses doigts',
                    'Laisser sécher les créations',
                ],
                'conseils' => [
                    'Proposer plusieurs couleurs primaires',
                    'Prévoir un point d’eau ou des lingettes à portée de main',
                    'Encourager l’enfant à nommer les couleurs et les formes',
                ]
            ])
            ->setMaterials([
                "Feuilles épaisses ou papier Canson",
                "Peinture non toxique spéciale enfants",
                "Blouse ou vieux t-shirt",
                "Protection de table (nappe, journal)",
                "Lingettes ou eau et serviette"
            ])  
            ->addActivityTypes($activityType)  // ->addActivityTypes($activityType) ?
            ->addTheme($theme);  // ->addTheme($theme)?

            $this->assertEquals('Peinture aux doigts', $activity->getTitle());
            $this->assertEquals('finger-painting.png', $activity->getImage());
            $this->assertEquals('0-2 ans', $activity->getAgeGroup());
            $this->assertEquals([
                'objectif' => 'Stimuler la créativité et la motricité fine',
                'étapes' => [
                    'Préparer une surface protégée (nappe, journal, etc.)',
                    'Verser un peu de peinture dans des petits récipients',
                    'Inviter l’enfant à peindre librement avec ses doigts',
                    'Laisser sécher les créations',
                ],
                'conseils' => [
                    'Proposer plusieurs couleurs primaires',
                    'Prévoir un point d’eau ou des lingettes à portée de main',
                    'Encourager l’enfant à nommer les couleurs et les formes',
                ]
            ], $activity->getDescription());
             $this->assertEquals([
                "Feuilles épaisses ou papier Canson",
                "Peinture non toxique spéciale enfants",
                "Blouse ou vieux t-shirt",
                "Protection de table (nappe, journal)",
                "Lingettes ou eau et serviette"
            ], $activity->getMaterials());
            $this->assertEquals($activityType, $activity->getActivityTypes()->first());
            $this->assertEquals($theme, $activity->getThemes()->first());
          
}
}
