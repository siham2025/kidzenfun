<?php

namespace App\Controller\Legal;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LegalNoticeController extends AbstractController {
    #[Route('/mentions-legales', name:'app_legal_notice')]

    public function index(): Response 
    {
        return $this -> render( 'legal/legal_notice.html.twig');
    } 
}