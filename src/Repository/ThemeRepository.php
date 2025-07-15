<?php

namespace App\Repository;

use App\Entity\Theme;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * ===========================
 * REPOSITORY : ThemeRepository
 * ===========================
 *
 * Ce dépôt (repository) permet d'interagir avec les entités Theme.
 * C'est ici que je peux ajouter des méthodes personnalisées
 * pour faire des recherches spécifiques sur les thèmes.
 */
class ThemeRepository extends ServiceEntityRepository
{
    /**
     * Constructeur : injecte le ManagerRegistry et lie l'entité Theme.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Theme::class);
    }

    // 👉 Exemple de méthode personnalisée à ajouter si besoin :
    /*
    public function findByKeyword(string $keyword): array
    {
        return $this->createQueryBuilder('t')
            ->where('t.name LIKE :kw')
            ->setParameter('kw', '%' . $keyword . '%')
            ->getQuery()
            ->getResult();
    }
    */
}