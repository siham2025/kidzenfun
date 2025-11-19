<?php

namespace App\Controller\Admin;

use App\Entity\Activity;
use App\Form\Admin\ActivityFormType;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/activities')]
#[IsGranted('ROLE_ADMIN')]
class AdminActivityController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em) {}

    #[Route('/', name: 'admin_activities', methods: ['GET'])]
    public function index(ActivityRepository $activityRepository): Response
    {
        return $this->render('admin/activity/index.html.twig', [
            'activities' => $activityRepository->findBy([], ['id' => 'DESC']),
        ]);
    }

    #[Route('/new', name: 'admin_activity_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $activity = new Activity();

        // pré-remplissage des champs non mappés
        $form = $this->createForm(ActivityFormType::class, $activity, [
            'current_theme' => null,
            'current_type'  => null,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Image upload (champ non mappé)
            /** @var UploadedFile|null $file */
            $file = $form->get('image')->getData();
            if ($file instanceof UploadedFile) {
                $filename = uniqid('act_') . '.' . $file->guessExtension();
                $file->move($this->getParameter('activities_upload_dir'), $filename);
                $activity->setImage($filename);
            } else {
                // ICI : si rien uploadé, on met l'image par défaut
                if (!$activity->getImage()) {
                    $activity->setImage('default.png'); 
                }
            }
            // === Thème & Type (sélection simple) ===
            $selectedTheme = $form->get('theme')->getData();        // Theme|null
            $selectedType  = $form->get('activityType')->getData(); // ActivityType|null

          
            $activity->getThemes()->clear();
            if ($selectedTheme) {
                $activity->addTheme($selectedTheme);        // côté inverse
                $selectedTheme->addActivity($activity);     // côté propriétaire
            }

            $activity->getActivityTypes()->clear();
            if ($selectedType) {
                $activity->addActivityType($selectedType);  // côté inverse
                $selectedType->addActivity($activity);      // côté propriétaire
            }

            $this->em->persist($activity);
            $this->em->flush();

            $this->addFlash('success', 'Activité ajoutée avec succès.');
            return $this->redirectToRoute('admin_activities');
        }

        return $this->render('admin/activity/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/edit', name: 'admin_activity_edit', methods: ['GET', 'POST'])]
    public function edit(Activity $activity, Request $request): Response
    {
        $oldImage = $activity->getImage();

        // Pré-remplissage des champs non mappés : thème et type
        $currentTheme = $activity->getThemes()[0] ?? null;
        $currentType  = $activity->getActivityTypes()[0] ?? null;

        $form = $this->createForm(ActivityFormType::class, $activity, [
            'current_theme' => $currentTheme,
            'current_type'  => $currentType,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Image upload
            /** @var UploadedFile|null $file */
            $file = $form->get('image')->getData();
            if ($file instanceof UploadedFile) {
                $filename = uniqid('act_') . '.' . $file->guessExtension();
                $file->move($this->getParameter('activities_upload_dir'), $filename);
                // Supprimer l'ancienne image si elle existait
                if ($oldImage) {
                    $this->removeImage($oldImage);
                }
                $activity->setImage($filename);
            } else {
                $activity->setImage($oldImage);  // Garder l'ancienne image
            }

            // === Thème & Type (édition : remplacer l’existant) ===
            $selectedTheme = $form->get('theme')->getData();        // Theme|null
            $selectedType  = $form->get('activityType')->getData(); // ActivityType|null

            // Détacher tous les anciens thèmes (des 2 côtés)
            foreach ($activity->getThemes()->toArray() as $oldTheme) {
                $oldTheme->removeActivity($activity);   // propriétaire
                $activity->removeTheme($oldTheme);      // inverse
            }
            // Attacher le nouveau thème (des 2 côtés)
            if ($selectedTheme) {
                $activity->addTheme($selectedTheme);    // inverse
                $selectedTheme->addActivity($activity); // propriétaire
            }

            // Détacher tous les anciens types (des 2 côtés)
            foreach ($activity->getActivityTypes()->toArray() as $oldType) {
                $oldType->removeActivity($activity);        // propriétaire
                $activity->removeActivityType($oldType);    // inverse
            }
            // Attacher le nouveau type (des 2 côtés)
            if ($selectedType) {
                $activity->addActivityType($selectedType);  // inverse
                $selectedType->addActivity($activity);      // propriétaire
            }


            $this->em->flush();

            $this->addFlash('success', 'Activité mise à jour.');
            return $this->redirectToRoute('admin_activities');
        }

        return $this->render('admin/activity/edit.html.twig', [
            'form'     => $form->createView(),
            'activity' => $activity,
        ]);
    }

    #[Route('/{id}/delete', name: 'admin_activity_delete', methods: ['POST'])]
    public function delete(Activity $activity, Request $request): Response
    {
        if (!$this->isCsrfTokenValid('del_activity_' . $activity->getId(), $request->request->get('_token'))) {
            $this->addFlash('danger', 'Token CSRF invalide.');
            return $this->redirectToRoute('admin_activities');
        }

        $image = $activity->getImage();

        $this->em->remove($activity);
        $this->em->flush();

        if ($image) {
            $this->removeImage($image);
        }

        $this->addFlash('success', 'Activité supprimée.');
        return $this->redirectToRoute('admin_activities');
    }

    private function removeImage(string $filename): void
    {
        $fs = new Filesystem();
        $path = rtrim($this->getParameter('activities_upload_dir'), '/') . '/' . $filename;
        if ($fs->exists($path)) {
            $fs->remove($path);
        }
    }
}
