<?php

namespace App\Controller;

use App\Repository\ThemeRepository;
use App\Repository\ActivityRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

// #[Route(path: '/activities')] factorisation si y a /activities par exemple qui se répète peut etre j'en ai pas besoin 
// si je veux sécuriser toutes les routes qui sont dans le contrôleur je doit mettre IS Granted avant la class (ici) et la supprimer à l'intérieur de la class
class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    // #[IsGranted('ROLE_USER')]   // pour sécuriser la route dans ce cas c'est la home '/'
    public function index(ThemeRepository $themeRepo, ActivityRepository $activityRepo): Response
    {
        // Récupérer tous les thèmes
        $themes = $themeRepo->findAll();

        // Récupérer une activité du jour (aléatoire)
        $activityOfTheDay = $activityRepo->findRandom();

        return $this->render('home.html.twig', [
            // 'themes' => $themes,
            'activityOfTheDay' => [$activityOfTheDay],
        ]);
    }
}
