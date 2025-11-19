<?php

namespace App\Controller;
use App\Entity\Activity;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class FavoriteController extends AbstractController{

    #[Route('/favorite/toggle/{id}', name: 'toggle_favorite', methods: ['POST'])]
    #[IsGranted('ROLE_USER')] //On protège la route : seul un utilisateur connecté avec le rôle ROLE_USER peut l'utiliser.
    public function addToFavorites(Activity $activity, EntityManagerInterface $em): JsonResponse
    {
        /** @var \App\Entity\User $user */
       $user = $this->getUser();

    if (!$user) {
        return $this->json(['success' => false, 'message' => 'Non connecté.'], 403);
    }

    $isFavorited = false;

    if ($user->getFavorites()->contains($activity)) {
        $user->removeFavorite($activity);
    } else {
        $user->addFavorite($activity);
        $isFavorited = true;
    }

    $em->persist($user);
    $em->flush();

    return $this->json([
        'success' => true,
        'favorited' => $isFavorited,
        'message' => $isFavorited ? 'Ajoutée aux favoris.' : 'Retirée des favoris.'
    ]);
}
}