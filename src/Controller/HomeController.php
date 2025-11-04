<?php

namespace App\Controller;

use App\Repository\ThemeRepository;
use App\Repository\ActivityRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(
        ThemeRepository $themeRepo,
        ActivityRepository $activityRepo
    ): Response {
        // (optionnel) si tu affiches encore des thèmes sur la home
        $themes = $themeRepo->findAll();

        // Activité du jour (déterministe : change chaque jour)
        $activity = $activityRepo->findOfTheDay();

        return $this->render('home.html.twig', [
            // 'themes' => $themes, // dé-commente si tu utilises les thèmes dans le twig
            'activityOfTheDay' => $activity ? [$activity] : [], // ton twig attend un tableau
        ]);
    }
}