<?php

namespace App\Controller\Legal; // ← correspond au dossier Legal

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CharteController extends AbstractController
{
    #[Route('/charte', name: 'app_charte')]
    public function index(): Response
    {
        return $this->render('legal/charte.html.twig'); 
        // tu peux mettre 'charte.html.twig' direct si tu le mets à la racine de templates
    }
}