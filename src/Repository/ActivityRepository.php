<?php

namespace App\Repository;

use App\Entity\Activity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * ============================
 * REPOSITORY : ActivityRepository
 * ============================
 * Ce dépôt gère toutes les requêtes personnalisées pour l'entité Activity.
 */
class ActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activity::class);
    }

    /**
     * ==================================
     * FILTRE MULTICRITÈRES : findByFilters
     * ==================================
     * Utilisé dans la page /filter pour rechercher des activités
     * selon l’âge, le thème et le type.
     */
    public function findByFilters(?string $ageGroup, ?string $theme, ?string $type): array
    {
        $qb = $this->createQueryBuilder('a'); // point de départ : entité Activity

        if ($ageGroup) {
            $qb->andWhere('a.ageGroup = :age')
               ->setParameter('age', $ageGroup);
        }

        if ($theme) {
            $qb->join('a.themes', 't')
               ->andWhere('t.name = :theme')
               ->setParameter('theme', $theme);
        }

        if ($type) {
            $qb->join('a.activityTypes', 'at')
               ->andWhere('at.name = :type')
               ->setParameter('type', $type);
        }

        return $qb->getQuery()->getResult(); // exécute la requête
    }

    /**
     * =============================
     * ACTIVITÉ DU JOUR
     * =============================
     * Utilisé sur la page d’accueil pour afficher une activité du jour.
     */

public function findOfTheDay(?\DateTimeInterface $date = null): ?Activity
{
    $date ??= new \DateTimeImmutable('today');    // date du jour (minuit)

    // 1) nombre total d'activités
    $count = (int) $this->createQueryBuilder('a')
        ->select('COUNT(a.id)')
        ->getQuery()
        ->getSingleScalarResult();

    if ($count === 0) {
        return null;
    }

    // 2) jour de l'année (0..365) -> index stable du jour
    $dayOfYear = (int) $date->format('z');        // 0-based
    $offset    = $dayOfYear % $count;             // tourne sur le catalogue

    // 3) prendre l’élément à l’offset (ordre stable !)
    return $this->createQueryBuilder('a')
        ->orderBy('a.id', 'ASC')                  // ordre déterministe
        ->setFirstResult($offset)
        ->setMaxResults(1)
        ->getQuery()
        ->getOneOrNullResult();
}
    /**
     * ===================================
     * FILTRE PAR THÈME (via son nom) : findByThemes
     * ===================================
     * Requête utilisée pour afficher les activités d’un thème
     * (ex: lorsqu’on clique sur une carte-thème depuis la home).
     */
    public function findByThemes(string $theme): array
    {
        return $this->createQueryBuilder('activity')
            ->join('activity.themes', 'theme')
            ->where('theme.name = :name')
            ->setParameter('name', $theme)
            ->getQuery()
            ->getResult();
    }
}