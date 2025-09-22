<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToMany;
use App\Entity\User;


#[ORM\Entity()]
class Activity
{
    // ========== IDENTIFIANT UNIQUE ==========
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    private int $id;

    // ========== TITRE DE L'ACTIVITÉ ==========
    #[ORM\Column(type: 'string')]
    private string $title;

    // ========== IMAGE ASSOCIÉE (facultative) ==========
    #[ORM\Column(length: 255, nullable: true, type: 'string')]
    private ?string $image = null;

    // ========== GROUPE D'ÂGE VISÉ ==========
    #[ORM\Column(type: 'string')]
    private string $ageGroup;

    // ========== DESCRIPTION (liste d’étapes - JSON) ==========
    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $description = null;

    // ========== MATÉRIELS NÉCESSAIRES (JSON) ==========
    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $materials = null;

    // ========== RELATION MANY-TO-MANY AVEC ActivityType ==========
    #[ManyToMany(targetEntity: ActivityType::class, mappedBy: 'activities')]
    private Collection $activityTypes;

    // ========== RELATION MANY-TO-MANY AVEC Theme ==========
    #[ManyToMany(targetEntity: Theme::class, mappedBy: 'activities')]
    private Collection $themes;

    // ========== UTILISATEURS QUI ONT MIS EN FAVORI ==========
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'favorites')]
    private Collection $favoritedBy;

    // ========== CONSTRUCTEUR ==========
    public function __construct()
    {
        $this->activityTypes = new ArrayCollection();
        $this->themes = new ArrayCollection();
        $this->favoritedBy = new ArrayCollection();
    }

    // ========== GETTERS & SETTERS ==========

    // ID
    public function getId(): int
    {
        return $this->id;
    }

    // Titre
    public function getTitle(): string
    {
        return $this->title;
    }
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    // Image
    public function getImage(): ?string
    {
        return $this->image;
    }
    public function setImage(?string $image): self
    {
        $this->image = $image;
        return $this;
    }

    // Groupe d'âge
    public function getAgeGroup(): string
    {
        return $this->ageGroup;
    }
    public function setAgeGroup(string $ageGroup): self
    {
        $this->ageGroup = $ageGroup;
        return $this;
    }

    // Description
    public function getDescription(): ?array
    {
        return $this->description;
    }
    public function setDescription(?array $description): self
    {
        $this->description = $description;
        return $this;
    }

    // Matériel
    public function getMaterials(): ?array
    {
        return $this->materials;
    }
    public function setMaterials(?array $materials): self
    {
        $this->materials = $materials;
        return $this;
    }

    // ========= GESTION DES TYPES D'ACTIVITÉ =========

    public function getActivityTypes(): Collection
    {
        return $this->activityTypes;
    }

    public function addActivityTypes(ActivityType $activityType): self
    {
        if (!$this->activityTypes->contains($activityType)) {
            $this->activityTypes->add($activityType);
        }
        return $this;
    }

    public function removeActivityTypes(ActivityType $activityType): self
    {
        $this->activityTypes->removeElement($activityType);
        return $this;
    }

    // ========= GESTION DES THÈMES =========

    public function getThemes(): Collection
    {
        return $this->themes;
    }

    public function addTheme(Theme $theme): self
    {
        if (!$this->themes->contains($theme)) {
            $this->themes->add($theme);
        }
        return $this;
    }

    public function removeTheme(Theme $theme): self
    {
        $this->themes->removeElement($theme);
        return $this;
    }

    // ========= GESTION DES FAVORIES =========
    public function getFavoritedBy(): Collection
    {
        return $this->favoritedBy;
    }


    // ========= GESTION ACITIVITE DU JOUR =========
    #[ORM\Column(type: 'boolean')]
    private bool $isDailyActivity = false;

    public function isDailyActivity(): bool
    {
        return $this->isDailyActivity;
    }

    public function setIsDailyActivity(bool $isDailyActivity): self
    {
        $this->isDailyActivity = $isDailyActivity;
        return $this;
    }
}
