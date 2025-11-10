<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

final class EmailVerificationController extends AbstractController
{
    public function __construct(
        private VerifyEmailHelperInterface $verifyEmailHelper, // service du bundle pour signer/valider les URLs
        private EntityManagerInterface $em                      // accès BDD pour marquer l'utilisateur vérifié
    ) {}

    /**
     * Route cliquée depuis l'e-mail de confirmation.
     * Elle valide la signature + l'expiration du lien, puis active le compte.
     */
    #[Route('/verify', name: 'app_verify_email')]
    public function verify(Request $request): Response
    {
        // 1) Récupération de l'id transmis dans l'URL (paramètre 'id')
        $id = $request->query->get('id');
        if (!$id) {
            $this->addFlash('error', 'Lien invalide.');
            return $this->redirectToRoute('app_login');
        }

        // 2) Chargement de l'utilisateur
        /** @var User|null $user */
        $user = $this->em->getRepository(User::class)->find($id);
        if (!$user) {
            $this->addFlash('error', 'Utilisateur introuvable.');
            return $this->redirectToRoute('app_login');
        }

        // 3) Validation de la signature depuis l'objet Request
        //    (Remplace validateEmailConfirmation(), désormais dépréciée)
        try {
            $this->verifyEmailHelper->validateEmailConfirmationFromRequest(
                $request,
                (string) $user->getId(),
                (string) $user->getEmail()
            );
        } catch (VerifyEmailExceptionInterface $e) {
            // Lien modifié, expiré ou email ne correspondant pas à la signature
            $this->addFlash('error', 'Lien de vérification invalide ou expiré.');
            return $this->redirectToRoute('app_login');
        } catch (\Throwable $e) {
            // Autre erreur inattendue
            $this->addFlash('error', 'Une erreur est survenue lors de la vérification.');
            return $this->redirectToRoute('app_login');
        }

        // 4) Activation du compte si nécessaire
        if (!$user->isVerified()) {
            $user->setIsVerified(true);
            $this->em->flush();
        }

        // 5) Message de succès + redirection vers la page de connexion
        $this->addFlash('success', 'Adresse e-mail vérifiée. Vous pouvez vous connecter.');
        return $this->redirectToRoute('app_login');
    }
}
