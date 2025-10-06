<?php

namespace App\Controller\Legal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrivacyController extends AbstractController
{
    #[Route('/confidentialite', name: 'app_privacy')]
    public function index(): Response
    {
        return $this->render('legal/privacy.html.twig');
    }
}
