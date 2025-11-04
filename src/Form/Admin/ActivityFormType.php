<?php

namespace App\Form\Admin;

use App\Entity\Activity;
use App\Entity\Theme;
use App\Entity\ActivityType as ActivityTypeEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ===== Infos de base =====
            ->add('title', TextType::class, [
                'label'    => 'Titre',
                'required' => true,
            ])

            // Image (non mappé : on gère l’upload dans le contrôleur)
            ->add('image', FileType::class, [
                'label'    => 'Image',
                'mapped'   => false,
                'required' => false,
            ])

            ->add('ageGroup', ChoiceType::class, [
                'label'   => 'Âge',
                'choices' => [
                    '0-2 ans'  => '0-2 ans',
                    '3-5 ans'  => '3-5 ans',
                    '6-8 ans'  => '6-8 ans',
                    '9-12 ans' => '9-12 ans',
                    'tout age' => 'tout age',
                ],
                'placeholder' => 'Sélectionner…',
                'required'    => true,
            ])

            // ===== Sélection simple pour Thème & Type (non mappés) =====
            ->add('theme', EntityType::class, [
                'label'        => 'Thème',
                'class'        => Theme::class,
                'choice_label' => 'name',
                'multiple'     => false,
                'expanded'     => false,     // <select>
                'mapped'       => false,     // on mettra à jour la collection à la main
                'required'     => true,
                'placeholder'  => 'Sélectionner…',
                'data'         => $options['current_theme'] ?? null, // préremplir en édition
            ])
            

            ->add('activityType', EntityType::class, [
                'label'        => 'Type',
                'class'        => ActivityTypeEntity::class,
                'choice_label' => 'name',
                'multiple'     => false,
                'expanded'     => false,
                'mapped'       => false,
                'required'     => true,
                'placeholder'  => 'Sélectionner…',
                'data'         => $options['current_type'] ?? null,
    
            ])

            // ===== Contenu pédagogique =====
            ->add('objective', TextareaType::class, [
                'label'      => 'Objectif',
                'required'   => true,
                'empty_data' => '',
            ])
            ->add('steps', TextareaType::class, [
                'label'      => 'Étapes',
                'required'   => true,
                'empty_data' => '',
            ])
            ->add('materials', TextareaType::class, [
                'label'      => 'Matériel nécessaire',
                'required'   => true,
                'empty_data' => '',
            ])
            ->add('tips', TextareaType::class, [
                'label'      => 'Conseils',
                'required'   => true,
                'empty_data' => '',
            ])

            // ===== Drapeau "activité du jour" =====
            ->add('isDailyActivity', CheckboxType::class, [
                'label'    => 'Activité du jour ?',
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'    => Activity::class,
            // pour pré-remplir les champs non mappés en édition
            'current_theme' => null,
            'current_type'  => null,
        ]);
    }
}
