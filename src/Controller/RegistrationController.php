<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\Admin\RegistrationForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;

final class RegistrationController extends AbstractController
{
    public function __construct(
        private VerifyEmailHelperInterface $verifyEmailHelper, // Génère/valide les liens signés
        private EntityManagerInterface $em
    ) {}

    #[Route('/registration', name: 'registration')]
    public function index(
        Request $request,
        UserPasswordHasherInterface $hasher,
        MailerInterface $mailer
    ): Response {
        $user = new User();

        // 1) Création + mapping du formulaire d'inscription vers l'entité User
        $form = $this->createForm(RegistrationForm::class, $user);
        $form->handleRequest($request);

        // 2) Soumission + validation
        if ($form->isSubmitted() && $form->isValid()) {
            // 2.a) Récupère le mot de passe “en clair” depuis le champ non mappé plainPassword
            $plainPassword = $form->get('plainPassword')->getData();

            // 2.b) Hash sécurisé (algo auto = bcrypt/argon2id selon env)
            $user->setPassword($hasher->hashPassword($user, $plainPassword));

            // 2.c) Par sécurité, s'assurer que le compte n'est PAS vérifié à la création
            // (ton entité est déjà false par défaut, on double-clarifie l’intention)
            $user->setIsVerified(false);

            // 2.d) Persistance en base
            $this->em->persist($user);
            $this->em->flush();

            // 3) Génère le lien de vérification signé
            // - 'app_verify_email' = nom de la route de vérification (voir EmailVerificationController)
            // - On passe l'id dans l'URL pour retrouver l'utilisateur
            $signature = $this->verifyEmailHelper->generateSignature(
                'app_verify_email',
                $user->getId(),
                $user->getEmail(),
                ['id' => $user->getId()]
            );
            // 4) Prépare l'e-mail (templated) avec le lien signé
            // - Astuce : configure 'framework.router.default_uri' pour obtenir une URL absolue en prod
            $email = (new TemplatedEmail())
                ->from('contact@kidzen-fun.fr')
                ->to($user->getEmail())
                ->subject('Confirmez votre adresse e-mail')
                ->htmlTemplate('emails/verify_email.html.twig')
                ->context([
                    'user'      => $user,
                    'verifyUrl' => $signature->getSignedUrl(),
                    'expiresAt' => $signature->getExpiresAt(),
                ]);

            // 5) Envoi de l’e-mail
            $mailer->send($email);

            // 6) Message de confirmation + redirection vers la page de login (PAS de login auto)
            $this->addFlash('success', 'Un e-mail de vérification vient de vous être envoyé. Merci de confirmer votre adresse avant de vous connecter.');
            return $this->redirectToRoute('app_login');
        }

        // 7) Affichage du formulaire d'inscription
        return $this->render('user/registration.html.twig', [
            'registration' => $form->createView(),
        ]);
    }
}
