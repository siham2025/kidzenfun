<?php

namespace App\Form\Admin;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        /** @var User $user */
        $user = $options['data'];

        // rôle actuel pour pré-sélectionner
        $currentRole = 'ROLE_USER';
        foreach (['ROLE_ADMIN', 'ROLE_USER', 'ROLE_VISITOR'] as $r) {
            if (\in_array($r, $user->getRoles(), true)) { $currentRole = $r; break; }
        }

        $builder
            ->add('lastName', null, ['label' => 'Nom'])
            ->add('firstName', null, ['label' => 'Prénom'])
            ->add('email', null, ['label' => 'Email'])

            // Sélecteur de rôle (non mappé -> on le remettra dans l'entité au submit)
            ->add('role', ChoiceType::class, [
                'label'   => 'Rôle',
                'mapped'  => false,
                'choices' => [
                    'Admin'       => 'ROLE_ADMIN',
                    'Utilisateur' => 'ROLE_USER',
                ],
                'data'    => $currentRole,
            ])

            // Sélecteur de statut (Actif/Inactif) basé sur isVerified (bool)
            ->add('status', ChoiceType::class, [
                'label'   => 'Status',
                'mapped'  => false,
                'choices' => [
                    'Actif'   => 1,
                    'Inactif' => 0,
                ],
                'data'    => $user->isVerified() ? 1 : 0,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
