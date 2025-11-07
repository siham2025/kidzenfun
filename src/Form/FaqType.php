<?php

namespace App\Form;

use App\Entity\Faq;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FaqType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            ->add('question', TextType::class, [
                'label' => 'Question',
                'attr'  => ['placeholder' => 'Ex : Comment créer un compte ?']
            ])
            ->add('answer', TextareaType::class, [
                'label' => 'Réponse (HTML autorisé)',
                'attr'  => ['rows' => 8, 'placeholder' => '<p>Votre réponse…</p>']
            ])
            ->add('category', TextType::class, [
                'label' => 'Catégorie', 'empty_data' => 'Général'
            ])
            ->add('position', IntegerType::class, [
                'label' => 'Position', 'empty_data' => '0'
            ])
            ->add('isPublished', CheckboxType::class, [
                'label' => 'Publié', 'required' => false
            ])
            ->add('locale', TextType::class, [
                'label' => 'Langue', 'empty_data' => 'fr'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => Faq::class]);
    }
}
