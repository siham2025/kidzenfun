<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Form\Admin\RegistrationForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

// 1- Méthode pour récupérer la liste des utilisateurs présents dans la base de données 

#[Route('/admin/users')]
#[IsGranted('ROLE_ADMIN')]
class AdminUserController extends AbstractController
{
    #[Route('/', name: 'admin_users')]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('admin/user/index.html.twig', [
            'users' => $userRepository->findAll()
        ]);
    }

    // 2- Méthose pour ajouter un utilisateur dans la base de donnée

    #[Route('/new', name: 'admin_user_new')]
    public function new(
        Request $request,                              // Pour gérer la requête HTTP (GET/POST)
        EntityManagerInterface $em,                    // Pour interagir avec la base de données
        UserPasswordHasherInterface $passwordHasher    // Pour hacher le mot de passe
    ): Response {
        // Crée une nouvelle instance de l'entité User (utilisateur vierge)
        $user = new User();

        // Crée un formulaire basé sur RegistrationForm lié à l'entité User
        $form = $this->createForm(RegistrationForm::class, $user);

        // Lie les données de la requête (POST) au formulaire
        $form->handleRequest($request);

        // Si le formulaire est soumis et valide (toutes les règles sont respectées)
        if ($form->isSubmitted() && $form->isValid()) {

            // On récupère le mot de passe brut depuis le champ non-mappé 'plainPassword'
            $plainPassword = $form->get('plainPassword')->getData();

            // On le hache en utilisant le composant de sécurité de Symfony
            $user->setPassword($passwordHasher->hashPassword($user, $plainPassword));

            // Prépare l’utilisateur à être inséré dans la base de données
            $em->persist($user);

            // Exécute réellement la requête d'insertion (INSERT INTO ...)
            $em->flush();

            // Ajoute un message flash qui s'affichera après redirection
            $this->addFlash('success', 'Utilisateur ajouté avec succès.');

            // Redirige vers la page de liste des utilisateurs
            return $this->redirectToRoute('admin_users');
        }

        // 3- Affiche le formulaire s’il n’a pas encore été soumis ou s’il contient des erreurs
        return $this->render('admin/user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    // 4- Méthode pour supprimer un utilisateur de la base de données 

    #[Route('/{id}/delete', name: 'admin_user_delete', methods: ['POST'])]
    public function delete(User $user, EntityManagerInterface $em, Request $request): Response
    {
        // Vérifie la validité du token CSRF pour éviter les suppressions frauduleuses
        if ($this->isCsrfTokenValid('delete_user_' . $user->getId(), $request->request->get('_token'))) {

            // Supprime l'utilisateur de la base de données
            $em->remove($user);
            $em->flush();

            // Message de confirmation affiché après redirection
            $this->addFlash('success', 'Utilisateur supprimé avec succès.');
        }

        // Redirige vers la liste des utilisateurs après suppression
        return $this->redirectToRoute('admin_users');
    }

    // 5- Méthode pour modifier un utilisateur 

    #[Route('/{id}/edit', name: 'admin_user_edit')]
public function edit(
    Request $request,                         // Pour gérer la requête HTTP
    User $user,                               // Symfony injecte automatiquement l'utilisateur selon l'id dans l'URL
    EntityManagerInterface $em,               // Pour interagir avec la base de données
    UserPasswordHasherInterface $hasher       // Pour hacher un nouveau mot de passe si besoin
): Response {
    // Crée le formulaire et lie les données existantes de l'utilisateur
    $form = $this->createForm(RegistrationForm::class, $user);

    // Récupère les données du formulaire si celui-ci est soumis
    $form->handleRequest($request);

    // Si le formulaire est soumis et valide
    if ($form->isSubmitted() && $form->isValid()) {
        // On récupère le champ "plainPassword" (non mappé, donc manuel)
        $plainPassword = $form->get('plainPassword')->getData();

        // Si un mot de passe a été saisi, on le hache et on le met à jour
        if ($plainPassword) {
            $user->setPassword($hasher->hashPassword($user, $plainPassword));
        }

        // Enregistre les modifications dans la base de données
        $em->flush();

        // Message de confirmation
        $this->addFlash('success', 'Utilisateur modifié avec succès.');

        // Redirection vers la liste des utilisateurs
        return $this->redirectToRoute('admin_users');
    }

    // Affiche la page avec le formulaire prérempli
    return $this->render('admin/user/edit.html.twig', [
        'form' => $form->createView(),
        'user' => $user
    ]);
}



}
