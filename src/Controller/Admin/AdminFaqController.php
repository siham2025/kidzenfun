<?php
// src/Controller/Admin/AdminFaqController.php
namespace App\Controller\Admin;

use App\Entity\Faq;
use App\Form\FaqType;
use App\Repository\FaqRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/faq', name: 'admin_faq_')]
class AdminFaqController extends AbstractController
{
    #[Route('', name: 'index', methods: ['GET'])]
    public function index(FaqRepository $repo): Response
    {
        $faqs = $repo->findBy([], ['position' => 'ASC', 'id' => 'ASC']);
        return $this->render('admin/faq/index.html.twig', ['faqs' => $faqs]);
    }

    #[Route('/new', name: 'new', methods: ['GET','POST'])]
    public function new(Request $req, EntityManagerInterface $em): Response
    {
        $faq = new Faq();
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            // pas de sanitize, on enregistre tel quel (texte simple)
            $em->persist($faq);
            $em->flush();

            $this->addFlash('success', 'FAQ créée');
            return $this->redirectToRoute('admin_faq_index');
        }

        return $this->render('admin/faq/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET','POST'])]
    public function edit(Faq $faq, Request $req, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(FaqType::class, $faq);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            $this->addFlash('success', 'FAQ mise à jour');
            return $this->redirectToRoute('admin_faq_index');
        }

        return $this->render('admin/faq/edit.html.twig', [
            'form' => $form->createView(),
            'item' => $faq,
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', methods: ['POST'])]
    public function delete(Faq $faq, Request $req, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('del_faq_' . $faq->getId(), $req->request->get('_token'))) {
            $em->remove($faq);
            $em->flush();
            $this->addFlash('success', 'FAQ supprimée');
        }
        return $this->redirectToRoute('admin_faq_index');
    }
}
