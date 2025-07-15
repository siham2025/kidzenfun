<?php

namespace App\Controller;
use App\Entity\User;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'app_profile')]
    #[IsGranted('ROLE_USER')]
    public function index(ActivityRepository $activityRepository): Response
    {
        // Récupération de l'utilisateur connecté
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        // Récupérer les activités favorites si la relation existe
        // Assure-toi que ton entité User possède getFavorites() ou similaire
        $favorites = method_exists($user, 'getFavorites') ? $user->getFavorites() : [];

        return $this->render('profile.html.twig', [
            'favorites' => $favorites,
        ]);
    }

// Déclare une nouvelle route protégée : seul un utilisateur connecté peut accéder à cette action
#[Route('/profile/remove-favorite/{id}', name: 'remove_favorite', methods: ['POST'])]
#[IsGranted('ROLE_USER')]
public function removeFavorite(
    int $id,
    ActivityRepository $activityRepository,
    EntityManagerInterface $entityManager
): Response {
    // Récupère l'utilisateur actuellement connecté
    /** @var \App\Entity\User $user */
    $user = $this->getUser();

    // Recherche l'activité à supprimer des favoris grâce à son ID
    $activity = $activityRepository->find($id);

    // Si l'activité n'existe pas, on affiche un message d'erreur et on redirige
    if (!$activity) {
        $this->addFlash('error', 'Activité non trouvée.');
        return $this->redirectToRoute('app_profile');
    }

    // Si l'activité est bien dans les favoris, on la retire
    if ($user->getFavorites()->contains($activity)) {
        $user->removeFavorite($activity);

        // Enregistre la modification en base de données
        $entityManager->flush();

        $this->addFlash('success', 'Activité retirée des favoris.');
    }

    return $this->redirectToRoute('app_profile');
}

}

