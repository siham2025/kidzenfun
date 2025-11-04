<?php

namespace App\Controller;

use App\Repository\FaqRepository; // On va chercher les données FAQ en base via le repository
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController; // Donne accès à render(), etc.
use Symfony\Component\HttpFoundation\Response; // Type de la réponse HTTP
use Symfony\Component\Routing\Annotation\Route; // Pour déclarer la route avec un attribut

class FaqController extends AbstractController
{
    /**
     * Route publique de la page FAQ.
     * - URL : /faq
     * - name : app_faq (sert pour path('app_faq') dans Twig)
     */
    #[Route('/faq', name: 'app_faq')]
    public function index(FaqRepository $faqRepository): Response
    {
        /**
         * Récupère en base **toutes** les FAQ publiées,
         * triées par "position" (ordre d’affichage).
         *
         * findBy(critères, tri)
         * - critères : ['isPublished' => true] -> uniquement celles visibles
         * - tri : ['position' => 'ASC'] -> de la plus petite position à la plus grande
         *
         * $faqs sera un tableau d’objets App\Entity\Faq
         */
        $faqs = $faqRepository->findBy(
            ['isPublished' => true],
            ['position' => 'ASC']
        );

        /**
         * Rend le template Twig 'templates/pages/faq.html.twig'
         * en lui passant la variable 'faqs' (le tableau récupéré ci-dessus).
         *
         * Dans Twig, tu y accèdes avec {{ faqs }} et tu peux faire
         * {% for item in faqs %} ... {% endfor %}
         */
        return $this->render('pages/faq.html.twig', [
            'faqs' => $faqs,
        ]);
    }
}
