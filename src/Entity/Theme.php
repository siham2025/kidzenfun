<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity()]
class Theme
{
    // =============== IDENTIFIANT ==================
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    private int $id;

    // =============== NOM DU THÈME ==================
    #[ORM\Column(type: 'string')]
    private string $name;

    // =============== RELATION AVEC ACTIVITÉ ==================
    // Un thème peut être lié à plusieurs activités.
    #[ORM\ManyToMany(targetEntity: Activity::class, inversedBy: 'themes')]
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

    // Ajoute une activité à ce thème
    public function addActivity(Activity $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities->add($activity);
        }
        return $this;
    }

    // Supprime une activité liée à ce thème
    public function removeActivity(Activity $activity): self
    {
        $this->activities->removeElement($activity);
        return $this;
    }
}