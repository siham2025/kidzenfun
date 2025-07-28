<?php

namespace App\Form\Admin;

use App\Entity\Theme;
use App\Entity\Activity;
use App\Entity\ActivityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ActivityFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Champ du titre de l'activité
            ->add('title', TextType::class, [
                'label' => 'Titre'
            ])

            // Champ pour la tranche d'âge
            ->add('ageGroup', TextType::class, [
                'label' => 'Tranche d\'âge'
            ])

            // Champ pour le nom du fichier image (si upload non géré)
            ->add('image', TextType::class, [
                'label' => 'Nom du fichier image'
            ])

            // Sélection d’un ou plusieurs thèmes associés
            ->add('themes', EntityType::class, [
                'class' => Theme::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => false,
                'label' => 'Thèmes'
            ])

            // Sélection des types d’activité (checkbox)
            ->add('activityTypes', EntityType::class, [
                'class' => ActivityType::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'label' => 'Types d\'activité'
            ])

            ->add('materials', TextareaType::class, [
                'required' => false,
                'mapped' => false,
                'label' => 'Matériel nécessaire',
                'attr' => ['rows' => 6],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Étapes de réalisation',
                'required' => false,
                'attr' => ['rows' => 10],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        // Le formulaire est lié à l’entité Activity
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
