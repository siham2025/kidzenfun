<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Form\Admin\UserEditType;
use App\Form\Admin\RegistrationForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
//pour la gestion des mots de passe oubliés
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


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
        Request $request,
        User $user,
        EntityManagerInterface $em
    ): Response {
        $form = $this->createForm(UserEditType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupère les 2 champs non mappés
            $user->setRoles([$form->get('role')->getData()]);
            $user->setIsVerified((bool) $form->get('status')->getData());

            $em->flush();
            $this->addFlash('success', 'Utilisateur modifié avec succès.');

            return $this->redirectToRoute('admin_users'); // <- ton nom de route liste
        }

        return $this->render('admin/user/edit.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
        ]);
    }

    //gestion des mots de passes oubliés

    #[Route('/{id}/send-reset', name: 'admin_user_send_reset', methods: ['POST'])]
    public function sendResetLink(
        User $user,
        Request $request,
        ResetPasswordHelperInterface $resetPasswordHelper,
        MailerInterface $mailer
    ): Response {
        // CSRF
        if (!$this->isCsrfTokenValid('send_reset_' . $user->getId(), $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Token CSRF invalide');
        }

        try {
            // 1) Générer le token
            $resetToken = $resetPasswordHelper->generateResetToken($user);
        } catch (ResetPasswordExceptionInterface $e) {
            $this->addFlash('warning', 'Un lien a déjà été envoyé récemment. Réessaie plus tard.');
            return $this->redirectToRoute('admin_user_edit', ['id' => $user->getId()]);
        }

        // 2) envoie l'e-mail 
        $email = (new TemplatedEmail())
            ->from(new Address('no-reply@kidzenfun.fr', 'Kidzen&fun'))
            ->to($user->getEmail())
            ->subject('Réinitialisation de votre mot de passe')
            ->htmlTemplate('emails/reset_password_admin.html.twig')
            ->context([
                'resetToken' => $resetToken,
                'user'       => $user,
            ]);

        $mailer->send($email);

        // (facultatif) afficher aussi le lien à l’admin
        $link = $this->generateUrl('app_reset_password', ['token' => $resetToken->getToken()], UrlGeneratorInterface::ABSOLUTE_URL);
        $this->addFlash(
            'success',
            sprintf('Lien envoyé à %s — <a href="%s" target="_blank" rel="noopener">Ouvrir le lien</a>', $user->getEmail(), $link)
        );


        return $this->redirectToRoute('admin_user_edit', ['id' => $user->getId()]);
    }
}
