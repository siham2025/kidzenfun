<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function contact(Request $request, EntityManagerInterface $em): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactForm::class, $contact);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Enregistre en base de données
            $em->persist($contact);
            $em->flush();

            // Message de confirmation
            $this->addFlash('success', 'Votre message a bien été envoyé !');

            // Redirige vers la même page ou une autre
            return $this->redirectToRoute('app_contact');
        }

        return $this->render('user/contact.html.twig', [
            'contactForm' => $form->createView(),
        ]);
    }
}