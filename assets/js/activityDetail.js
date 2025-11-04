// ---------------------------Fonctionnalité aimer une activité -------------------------


// Affiche un message dans la console pour confirmer que le JS est bien chargé
console.log("JS chargé !");

// Attend que toute la page soit chargée avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    console.log("JS chargé !");

    // Récupère tous les boutons qui permettent de "liker" une activité
    const buttons = document.querySelectorAll('.favorite-toggle');

    // Pour chaque bouton "favori" trouvé sur la page
    buttons.forEach((button) => {
        // Ajoute un événement au clic sur le bouton
        button.addEventListener('click', async () => {
            // Récupère l'ID de l'activité à partir de l'attribut data-id du bouton
            const activityId = button.dataset.id;
            console.log("Bouton cliqué pour l'activité ID :", activityId);
            console.log("Tentative d'envoi de requête POST vers /favorite/toggle/" + activityId);

            try {
                // Envoie une requête POST à Symfony pour activer/désactiver le favori
                const response = await fetch(`/favorite/toggle/${activityId}`, {
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest', // indique qu'il s'agit d'une requête AJAX
                    }
                });

                // Récupère la réponse JSON renvoyée par le contrôleur Symfony
                const result = await response.json();
                console.log("Résultat JSON :", result);

                // Sélectionne l'icône à l'intérieur du bouton
                const icon = button.querySelector('i');

                // Si l'activité est maintenant dans les favoris
                if (result.favorited) {
                    // Ajoute la classe CSS "favorited" pour changer la couleur du cœur (par ex. violet)
                    icon.classList.add('favorited');
                } else {
                    // Sinon, retire cette classe
                    icon.classList.remove('favorited');
                }
            } catch (error) {
                // Si une erreur survient (ex : problème réseau), affiche-la dans la console
                console.error("Erreur lors de la requête fetch :", error);
            }
        });
    });
});



// ----------------------fonctionnalité partager une acitivité ------------------------
document.addEventListener('DOMContentLoaded', () => {
  const share = document.querySelector('.share');
  if (!share) return;

  const btn  = share.querySelector('.share-toggle');
  const menu = share.querySelector('.share-menu');

  const title = encodeURIComponent(btn.dataset.title || document.title);
  const text  = encodeURIComponent(btn.dataset.text || '');
  const url   = encodeURIComponent(btn.dataset.url || location.href);

  // URLs de partage
  const links = {
    fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    wa: `https://wa.me/?text=${title}%20${url}`,
    li: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    mail: `mailto:?subject=${title}&body=${text}%0D%0A${url}`
  };

  // Injecte les href
  share.querySelector('.share-fb').href   = links.fb;
  share.querySelector('.share-wa').href   = links.wa;
  share.querySelector('.share-li').href   = links.li;
  share.querySelector('.share-mail').href = links.mail;

  // Ouvre/ferme le menu
  btn.addEventListener('click', () => {
    const shown = menu.hasAttribute('hidden') === false;
    menu.toggleAttribute('hidden', shown);
    btn.setAttribute('aria-expanded', String(!shown));
  });

  // Clique à l’extérieur -> fermer
  document.addEventListener('click', (e) => {
    if (!share.contains(e.target)) {
      menu.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Quand on clique un lien -> fermer le menu
  menu.addEventListener('click', () => {
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  });
});



// ------------------Fonctionnalité imprimer l'activité---------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const pb = document.querySelector('.print-btn');
  if (pb) pb.addEventListener('click', () => window.print());
});