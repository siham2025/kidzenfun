<?php

namespace App\Controller\Admin;

use App\Entity\Activity;
use App\Form\Admin\ActivityFormType;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


// 1- Méthode pour récupérer la liste des activitées présents dans la base de données 
#[Route('/admin/activities')]
#[IsGranted('ROLE_ADMIN')]
class AdminActivityController extends AbstractController
{
    #[Route('/', name: 'admin_activities')]
    public function index(ActivityRepository $activityRepository): Response
    {
        return $this->render('admin/activity/index.html.twig', [
            'activities' => $activityRepository->findAll()

        ]);
    }

    // 2- Méthode pour ajouter une activité dans la base de donnée  

    #[Route('/new', name: 'admin_activity_new')]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        // On crée une nouvelle instance vide d'Activity
        $activity = new Activity();

        // On lie l'entité à un formulaire
        $form = $this->createForm(ActivityFormType::class, $activity);

        // Gère les données soumises (POST)
        $form->handleRequest($request);

        // Si formulaire soumis et valide
        if ($form->isSubmitted() && $form->isValid()) {
            // On enregistre l'activité en base
            $em->persist($activity);
            $em->flush();

            // Message de succès (affiché via flashbag)
            $this->addFlash('success', 'Activité ajoutée avec succès.');

            // Redirection vers la liste des activités
            return $this->redirectToRoute('admin_activities');
        }

        // Sinon, on affiche le formulaire
        return $this->render('admin/activity/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
 }