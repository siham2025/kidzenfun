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

    /**
     * ======================== IMPORTANT ========================
     * On remplace les anciens champs JSON par 4 champs TEXT simples :
     * - materials  : chaque ligne = 1 élément de matériel
     * - objective  : texte libre
     * - steps      : chaque ligne = 1 étape
     * - tips       : chaque ligne = 1 conseil
     * ===========================================================
     */
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $materials = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $objective = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $steps = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $tips = null;

    // ========== RELATION MANY-TO-MANY AVEC ActivityType ==========
    #[ManyToMany(targetEntity: ActivityType::class, mappedBy: 'activities')]
    private Collection $activityTypes;

    // ========== RELATION MANY-TO-MANY AVEC Theme ==========
    #[ManyToMany(targetEntity: Theme::class, mappedBy: 'activities')]
    private Collection $themes;

    // ========== UTILISATEURS QUI ONT MIS EN FAVORI ==========
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'favorites')]
    private Collection $favoritedBy;

    // ========= GESTION ACITIVITE DU JOUR =========
    #[ORM\Column(type: 'boolean')]
    private bool $isDailyActivity = false;

    // ========== CONSTRUCTEUR ==========
    public function __construct()
    {
        $this->activityTypes = new ArrayCollection();
        $this->themes        = new ArrayCollection();
        $this->favoritedBy   = new ArrayCollection();
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

    // ========== NOUVEAUX CHAMPS ==========

    public function getMaterials(): ?string { return $this->materials; }
    public function setMaterials(?string $materials): self { $this->materials = $materials; return $this; }

    public function getObjective(): ?string { return $this->objective; }
    public function setObjective(?string $objective): self { $this->objective = $objective; return $this; }

    public function getSteps(): ?string { return $this->steps; }
    public function setSteps(?string $steps): self { $this->steps = $steps; return $this; }

    public function getTips(): ?string { return $this->tips; }
    public function setTips(?string $tips): self { $this->tips = $tips; return $this; }

    // ========= GESTION DES TYPES D'ACTIVITÉ =========

// ========= GESTION DES TYPES D'ACTIVITÉ =========

public function getActivityTypes(): Collection
{
    return $this->activityTypes;
}

/**
 * IMPORTANT : méthodes au SINGULIER pour que Symfony sache ajouter/retirer
 * quand on soumet le formulaire (by_reference=false).
 */
public function addActivityType(ActivityType $activityType): self
{
    if (!$this->activityTypes->contains($activityType)) {
        $this->activityTypes->add($activityType);
    }
    return $this;
}

public function removeActivityType(ActivityType $activityType): self
{
    $this->activityTypes->removeElement($activityType);
    return $this;
}

/**
 * (Optionnel) Garde ces anciennes méthodes si tu les appelles ailleurs,
 * mais Symfony n’en a pas besoin.
 */
public function addActivityTypes(ActivityType $activityType): self
{
    return $this->addActivityType($activityType);
}

public function removeActivityTypes(ActivityType $activityType): self
{
    return $this->removeActivityType($activityType);
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

    // ========= ACTIVITÉ DU JOUR =========
    public function isDailyActivity(): bool
    {
        return $this->isDailyActivity;
    }

    public function setIsDailyActivity(bool $isDailyActivity): self
    {
        $this->isDailyActivity = $isDailyActivity;
        return $this;
    }

    // ========= HELPERS D’AFFICHAGE (listes) =========

    /** Retourne chaque ligne du matériel comme un item de liste */
    public function getMaterialsLines(): array
    {
        return $this->splitLines($this->materials);
    }

    /** Retourne chaque ligne des étapes comme un item numéroté */
    public function getStepsLines(): array
    {
        return $this->splitLines($this->steps);
    }

    /** Retourne chaque ligne des conseils comme un item numéroté */
    public function getTipsLines(): array
    {
        return $this->splitLines($this->tips);
    }

    /** Petit utilitaire pour découper un bloc texte en lignes non vides */
    private function splitLines(?string $text): array
    {
        if (!$text) return [];
        return array_values(array_filter(
            preg_split('/\R/u', $text) ?: [],
            fn($l) => trim($l) !== ''
        ));
    }
}
