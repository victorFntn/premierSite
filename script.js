document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez les éléments à animer
    const slideIn = document.querySelector(".slide-in");
    const slideInLeft = document.querySelector(".slide-in-left");
    const myButton = document.getElementById("myButton");

    // Fonction pour afficher le bouton après un délai de 1500 millisecondes (1.5 secondes)
    function showButtonWithDelay() {
        setTimeout(function () {
            myButton.classList.remove("hidden");
        }, 1500); // Délai de 1500 ms (1.5 s)
    }

    // Écoutez la fin de l'animation
    slideIn.addEventListener("animationend", showButtonWithDelay);
    slideInLeft.addEventListener("animationend", showButtonWithDelay);
});
