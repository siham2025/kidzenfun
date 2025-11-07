<?php

namespace App\Entity;

use App\Repository\FaqRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FaqRepository::class)]
class Faq
{
    /**
     * Clé primaire auto-incrémentée.
     * - `#[ORM\Id]` : marque la clé primaire
     * - `#[ORM\GeneratedValue]` : auto-incrément
     * - `#[ORM\Column]` : colonne en base (type int par défaut ici)
     */
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Question affichée dans le <summary>.
     * - string(255) non nul
     */
    #[ORM\Column(length: 255)]
    private string $question; // valeur requise → pas de ?

    /**
     * Réponse (HTML autorisé si je l’affiches avec |raw).
     * - type TEXT
     */
    #[ORM\Column(type: Types::TEXT)]
    private string $answer; // valeur requise

    /**
     * Catégorie facultative (pour grouper, filtrer).
     * - nullable: true
     */
    #[ORM\Column(length: 50, nullable: true)]
    private ?string $category = null;

    /**
     * Position d’affichage (ordre).
     * - non nul, valeur par défaut 0
     * - option SQL "default" pour que la BDD mette 0 si on oublie
     */
    #[ORM\Column(options: ['default' => 0])]
    private int $position = 0;

    /**
     * Publication (visible ou non sur le site).
     * - non nul, valeur par défaut true
     */
    #[ORM\Column(options: ['default' => true])]
    private bool $isPublished = true;

    /**
     * Langue de la FAQ (utile si tu gères i18n).
     * - non nul, taille 5 (ex: fr, en, fr_FR)
     * - valeur par défaut 'fr'
     */
    #[ORM\Column(length: 5, options: ['default' => 'fr'])]
    private string $locale = 'fr';

    // -----------------------------
    // Getters / setters (accès aux champs)
    // -----------------------------

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestion(): string
    {
        return $this->question;
    }
    public function setQuestion(string $question): self
    {
        $this->question = $question;
        return $this;
    }

    public function getAnswer(): string
    {
        return $this->answer;
    }
    public function setAnswer(string $answer): self
    {
        $this->answer = $answer;
        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }
    public function setCategory(?string $category): self
    {
        $this->category = $category;
        return $this;
    }

    public function getPosition(): int
    {
        return $this->position;
    }
    public function setPosition(int $position): self
    {
        $this->position = $position;
        return $this;
    }

    /**
     * Getter bool “is…” (convention Symfony) → retourne un bool strict.
     */
    public function isPublished(): bool
    {
        return $this->isPublished;
    }
    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;
        return $this;
    }

    public function getLocale(): string
    {
        return $this->locale;
    }
    public function setLocale(string $locale): self
    {
        $this->locale = $locale;
        return $this;
    }
}
