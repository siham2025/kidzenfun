<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Repository\ThemeRepository;
use App\Repository\ActivityRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin')]
#[IsGranted('ROLE_ADMIN')]
class AdminController extends AbstractController
{
    #[Route('/', name: 'admin_dashboard')]
    public function dashboard(
        UserRepository $userRepository,
        ActivityRepository $activityRepository,
        ThemeRepository $themeRepository
    ): Response {
        return $this->render('admin/dashboard.html.twig', [
            'userCount' => count($userRepository->findAll()),
            'activityCount' => count($activityRepository->findAll()),
            'themeCount' => count($themeRepository->findAll()),
        ]);
    }
}