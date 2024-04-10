document.addEventListener("DOMContentLoaded", function() {
    // Définit la fonction pour faire défiler la page
    function scrollToNextPage() {
        window.scrollTo({
            top: window.innerHeight, // Déplace la fenêtre vers le bas d'une hauteur d'écran
            behavior: 'smooth' // Ajoute une animation de défilement fluide
        });
    }

    // Appelle la fonction pour faire défiler la page toutes les 3 secondes
    setInterval(scrollToNextPage, 3000);
});

// Récupérer le formulaire
const form = document.getElementById('contact-form');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire
    event.preventDefault();
    
    // Récupérer l'élément du message de remerciement
    const thankYouMessage = document.getElementById('thank-you');
    
    // Masquer le formulaire
    form.style.display = 'none';
    
    // Afficher le message de remerciement
    thankYouMessage.style.display = 'block';
});
