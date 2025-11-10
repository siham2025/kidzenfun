<?php

namespace App\Form;

use App\Entity\Faq;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FaqType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            ->add('question', TextType::class, [
                'label' => 'Question',
                'attr'  => ['placeholder' => 'Ex : Comment créer un compte ?'],
                'help'  => 'Texte uniquement',
                'trim'  => true,
            ])
            ->add('answer', TextareaType::class, [
                'label' => 'Réponse (texte uniquement)',
                'attr'  => [
                    'rows' => 8,
                    'placeholder' => "Votre réponse… (les balises HTML seront ignorées)",
                ],
                'help' => 'Les balises HTML seront retirées',
                'trim' => true,
            ])
            ->add('category', TextType::class, [
                'label' => 'Catégorie',
                'empty_data' => 'Général',
                'trim' => true,
            ])
            ->add('position', IntegerType::class, [
                'label' => 'Position',
                'empty_data' => '0',
            ])
            ->add('isPublished', CheckboxType::class, [
                'label' => 'Publié',
                'required' => false,
            ])
            ->add('locale', TextType::class, [
                'label' => 'Langue',
                'empty_data' => 'fr',
                'trim' => true,
            ])
        ;

        // Optionnel mais recommandé si tu veux interdire strictement le HTML saisi :
        $b->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
            $data = $event->getData() ?? [];

            foreach (['question', 'answer', 'category', 'locale'] as $field) {
                if (isset($data[$field]) && is_string($data[$field])) {
                    // retire les balises HTML et espaces superflus
                    $data[$field] = trim(strip_tags($data[$field]));
                }
            }

            // normalise position
            if (isset($data['position'])) {
                $data['position'] = is_numeric($data['position']) ? (int) $data['position'] : 0;
            }

            // case des checkbox non cochées
            if (!isset($data['isPublished'])) {
                $data['isPublished'] = false;
            }

            $event->setData($data);
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => Faq::class]);
    }
}
