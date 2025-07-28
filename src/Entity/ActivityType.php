<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

#[ORM\Entity()]
class ActivityType
{
    // =============== IDENTIFIANT ==================
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    private int $id;

    // =============== NOM DU TYPE D'ACTIVITÉ ==================
    #[ORM\Column(type: 'string')]
    private string $name;

    // =============== RELATION AVEC ACTIVITÉS ==================
    // Un type d'activité peut être associé à plusieurs activités
    #[ORM\ManyToMany(targetEntity: Activity::class, inversedBy: 'activityTypes')]
    private Collection $activities;

    // =============== CONSTRUCTEUR ==================
    public function __construct()
    {
        $this->activities = new ArrayCollection();
    }

    // =============== GETTERS & SETTERS ==============

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    // =============== ACCÈS AUX ACTIVITÉS LIÉES ==============

    public function getActivities(): Collection
    {
        return $this->activities;
    }

    // Ajoute une activité liée à ce type
    public function addActivity(Activity $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities->add($activity);
        }
        return $this;
    }

    // Supprime une activité liée à ce type
    public function removeActivity(Activity $activity): self
    {
        $this->activities->removeElement($activity);
        return $this;
    }
}