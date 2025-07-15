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
     * ACTIVITÉ ALÉATOIRE : findRandom
     * =============================
     * Utilisé sur la page d’accueil pour afficher une activité du jour.
     */
    public function findRandom(): ?Activity
    {
        $all = $this->findAll(); // récupère toutes les activités
        if (count($all) === 0) {
            return null;
        }

        return $all[array_rand($all)]; // en choisit une au hasard
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