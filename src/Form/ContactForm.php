<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName', TextType::class, [
                'label' => '*Prénom ',
            ])
            ->add('lastName', TextType::class, [
                'label' => '*Nom',
            ])
            ->add('email', EmailType::class, [
                'label' => '*Email',
            ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone',
                'required' => false,
            ])
            ->add('subject', TextType::class, [
                'label' => '*Titre du message',
            ])
            ->add('message', TextareaType::class, [
                'label' => '*Message',
                'attr' => [
                    'rows' => 6,
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}