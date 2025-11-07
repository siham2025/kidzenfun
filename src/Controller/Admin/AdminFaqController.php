<?php

namespace App\Controller\Admin;

use App\Entity\Faq;
use App\Form\FaqType;
use App\Repository\FaqRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HtmlSanitizer\HtmlSanitizerInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

#[Route('/admin/faq', name: 'admin_faq_')]
class AdminFaqController extends AbstractController
{
    #[Route('', name: 'index')]
    public function index(FaqRepository $repo): Response
    {
        $items = $repo->findBy([], ['position' => 'ASC']);
        return $this->render('admin/faq/index.html.twig', ['items' => $items]);
    }

    #[Route('/new', name: 'new')]
    public function new(
        Request $req,
        EntityManagerInterface $em,
        #[Autowire(service: 'html_sanitizer.app.faq')] HtmlSanitizerInterface $sanitizer
    ): Response {
        $faq = new Faq();
        $form = $this->createForm(FaqType::class, $faq)->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $faq->setAnswer($sanitizer->sanitize($faq->getAnswer()));
            $em->persist($faq);
            $em->flush();
            $this->addFlash('success', 'FAQ créée');
            return $this->redirectToRoute('admin_faq_index');
        }
        return $this->render('admin/faq/new.html.twig', ['form' => $form]);
    }

    #[Route('/{id}/edit', name: 'edit')]
    public function edit(
        Faq $faq,
        Request $req,
        EntityManagerInterface $em,
        #[Autowire(service: 'html_sanitizer.app.faq')] HtmlSanitizerInterface $sanitizer
    ): Response {
        $form = $this->createForm(FaqType::class, $faq)->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            $faq->setAnswer($sanitizer->sanitize($faq->getAnswer()));
            $em->flush();
            $this->addFlash('success', 'FAQ mise à jour');
            return $this->redirectToRoute('admin_faq_index');
        }
        return $this->render('admin/faq/edit.html.twig', ['form' => $form, 'item' => $faq]);
    }

    #[Route('/{id}/delete', name: 'delete', methods: ['POST'])]
    public function delete(Faq $faq, Request $req, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('del' . $faq->getId(), $req->request->get('_token'))) {
            $em->remove($faq);
            $em->flush();
            $this->addFlash('success', 'FAQ supprimée');
        }
        return $this->redirectToRoute('admin_faq_index');
    }
}
