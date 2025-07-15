<?php

namespace App\Service;

use Aws\S3\S3Client;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Service personnalisé pour gérer l'upload de fichiers vers un bucket AWS S3
 */
class AwsS3Service
{
    private S3Client $s3Client; // client AWS S3
    private $bucket;   // nom du bucket

    /**
     * Constructeur : initialise le client AWS S3
     * 
     * @param string $accessKeyId Clé d'accès AWS
     * @param string $accessSecretKey Clé secrète AWS
     * @param string $bucketName Nom du bucket S3
     * @param string $region Région AWS (ex : eu-west-3)
     */
    public function __construct(
        string $accessKeyId, 
        string $accessSecretKey, 
        string $bucketName, 
        string $region
    ) {
        // On stocke le nom du bucket
        $this->bucket = $bucketName;

        // On instancie le client S3 avec les identifiants et la région
        $this->s3Client = new S3Client([
            'version' => 'latest',
            'region'  => $region,
            'credentials' => [
                'key'    => $accessKeyId,
                'secret' => $accessSecretKey,
            ],
        ]);
    }

    /**
     * Upload un fichier sur AWS S3
     *
     * @param UploadedFile $file Le fichier à uploader
     * @param string $prefix Préfixe (ex: dossier comme "images/") - optionnel
     * 
     * @return void (je pourrais faire retourner l'URL si je veux)
     */
    public function upload(UploadedFile $file, string $prefix = '')
    {
        // On génère un nom unique pour éviter les doublons
        $fileName = uniqid() . '_' . $file->getClientOriginalName();

        // On crée la clé (le "chemin" dans S3)
        $key = $prefix . $fileName; // ex : "images/abc123.jpg"
        // $key = $prefix . '/' . $fileName; // Alternative si je veux forcer le slash

        // dd($key); // ⚠️ Debug temporaire pour voir le nom de fichier (à supprimer plus tard)

        // Envoi du fichier à S3
        $this->s3Client->putObject([
            'Bucket' => $this->bucket,                     // le nom du bucket
            'Key'    => $key,                             // le chemin + nom du fichier
            'Body'   => fopen($file->getPathname(), 'rb'),// contenu du fichier (binaire)
            'ACL'    => 'public-read',                    // permet un accès public à l'image (via URL)
        ]);
        return $this->s3Client->getObjectUrl($this->bucket, $key);
    }
}