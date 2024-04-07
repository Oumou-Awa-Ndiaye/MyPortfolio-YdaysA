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
