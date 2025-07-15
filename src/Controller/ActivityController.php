<?php

namespace App\Controller;
use App\Entity\Activity;
use App\Repository\ActivityRepository;
use App\Repository\ThemeRepository;
use App\Repository\ActivityTypeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ActivityController extends AbstractController
{
    #[Route('/activities', name: 'app_activity')]
    public function filter(
        ActivityRepository $activityRepository,
        ThemeRepository $themeRepository,
        ActivityTypeRepository $typeRepository,
        Request $request
    ): Response {
        $ageGroup = $request->query->get('ageGroup');
        $theme = $request->query->get('theme');
        $type = $request->query->get('type');

        $activities = $activityRepository->findByFilters($ageGroup, $theme, $type);

        return $this->render('activity/filter.html.twig', [
            'activities' => $activities,
            'allThemes' => $themeRepository->findAll(),
            'allTypes' => $typeRepository->findAll(),
        ]);
    }

    #[Route('/activities/{id}', name: 'activity_detail')]
    public function show(int $id, ActivityRepository $activityRepository): Response
    {
        $activity = $activityRepository->find($id);

        if (!$activity) {
            throw $this->createNotFoundException('Activité non trouvée.');
        }

        return $this->render('activity/activityDetail.html.twig', [
            'activity' => $activity,
        ]);
    }
// permet d’afficher la liste des activités en fonction du thème passé dans l’URL (ex: /activites/theme/Motricité)
#[Route('/activites/theme/{theme}', name: 'app_filter')]
public function filterByTheme(
    string $theme,
    ActivityRepository $activityRepository,
    ThemeRepository $themeRepository,
    ActivityTypeRepository $typeRepository
): Response {
    $themeEntity = $themeRepository->findOneBy(['name' => $theme]);

    if (!$themeEntity) {
        throw $this->createNotFoundException('Thème non trouvé.');
    }

    $activities = $activityRepository->findByThemes($theme);
    $allThemes = $themeRepository->findAll();
    $allTypes = $typeRepository->findAll();

    return $this->render('activity/filter.html.twig', [
        'activities' => $activities,
        'selectedTheme' => $themeEntity,
        'allThemes' => $allThemes,
        'allTypes' => $allTypes,
    ]);
}

// méthode pour récupérer les activités du même thème 

#[Route('/activities/{id}', name: 'activity_detail')]
public function detail(Activity $activity, ActivityRepository $activityRepo): Response
{
    $theme = $activity->getThemes()[0] ?? null;

    $relatedActivities = [];
    if ($theme) {
        $relatedActivities = $activityRepo->findByThemes($theme->getName());
    }

    return $this->render('activity/activityDetail.html.twig', [
        'activity' => $activity,
        'relatedActivities' => $relatedActivities,
    ]);
}
}



