
// --- PARTIE 1 : installer un gestionnaire d'évènement de type clic sur un bouton

function onClickButton()
{
    // Recherche d'une balise en fonction d'un sélecteur CSS.
    const section = document.querySelector('.contenu');

    // Affiche ou cache le contenu de la balise (en se basant sur la propriété CSS display)
    // section.classList.toggle('d-none');

    // Ajoute uniquement class sans pouvoir la retirer
    // section.classList.add('d-none');

    // Pour écraser le contenu de l'article : section.textContent = null;
};

// Recherche d'une balise en fonction d'un sélecteur CSS.
const button = document.querySelector('.bouton');

// Pour récupérer tous les sélecteurs
//querySelectorAll('element');

// Installation d'un gestionnaire d'évènements de clic sur la balise.
button.addEventListener('click', onClickButton);