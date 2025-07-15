<?php

namespace App\Controller;

use App\Service\AwsS3Service;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class ImageController extends AbstractController
{
    #[Route('/upload-image', name: 'upload_image', methods: ['POST'])]
    public function uploadImage(Request $request, AwsS3Service $s3Service): Response
    {
        // Récupérer le fichier depuis le formulaire (name="image")
        $file = $request->files->get('image');

        if (!$file) {
            return new JsonResponse(['error' => 'Aucun fichier envoyé.'], 400);
        }

        try {
            // On envoie le fichier dans le bucket S3 dans le dossier "images/"
            $fileUrl = $s3Service->upload($file, 'dev/images/');

            // Réponse JSON avec le lien du fichier
            return new JsonResponse([
                'success' => true,
                'fileUrl' => $fileUrl
            ]);
        } catch (\Exception $e) {
            return new JsonResponse([
                'error' => 'Échec de l\'upload : ' . $e->getMessage()
            ], 500);
        }
    }

    #[Route('/upload', name: 'upload_form', methods: ['GET'])]
public function showUploadForm(): Response
{
    return $this->render('image/upload.html.twig');
}


}
