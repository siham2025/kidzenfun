<?php

namespace App\Repository;

use App\Entity\ActivityType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * ================================
 * REPOSITORY : ActivityTypeRepository
 * ================================
 *
 * Ce dépôt permet d’interroger la base de données pour récupérer
 * des types d’activités (ex : artistique, scientifique, etc.)
 */
class ActivityTypeRepository extends ServiceEntityRepository
{
    /**
     * Initialise le repository avec le registre de gestion Doctrine
     * et précise qu’on travaille avec l’entité ActivityType.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActivityType::class);
    }

    // 💡 Tu peux ajouter ici des méthodes personnalisées si nécessaire.
    // Par exemple, pour récupérer les types d'activités liés à un thème ou un âge :
    /*
    public function findTypesUsedByActivities(): array
    {
        return $this->createQueryBuilder('type')
            ->innerJoin('type.activities', 'a')
            ->groupBy('type.id')
            ->getQuery()
            ->getResult();
    }
    */


}