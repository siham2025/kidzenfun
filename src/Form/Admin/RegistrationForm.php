<?php

namespace App\Form\Admin;


use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Validator\Constraints\IsTrue;       
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class RegistrationForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                'label' => 'Prénom'
            ])
            ->add('lastName', TextType::class, [
                'label' => 'Nom'
            ])
            ->add('email')
            ->add('phone', TextType::class, [
                'label' => 'Téléphone'
            ])
            // ->add('roles')
            ->add('plainPassword', RepeatedType::class, [
                'type' =>PasswordType::class,
                'attr' => ['autocomplete' => 'new-password'],
                'required'=> true,
                'mapped' => false, // important !
                'first_options' => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Répéter le mot de passe']

            ])
             ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false, // ne sera pas stocké en base
                'label' => "J'accepte les conditions générales d'utilisation",
                'constraints' => [
                    new IsTrue([
                        'message' => "Vous devez accepter les conditions générales d'utilisation.",
                    ]),
                       ],
            ])
            // ->add('isVerified')
            // ->add('submit', SubmitType::class);
            // ->add('favorites', EntityType::class, [
            //     'class' => Activity::class,
            //     'choice_label' => 'id',
            //     'multiple' => true,
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
