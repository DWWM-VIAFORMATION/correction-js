// récupération du bouton de changement de mode grace à son ID
let btnDarkMode = document.querySelector('#btnDarkMode');
// association de l'événement click, du bouton avec la fonction changerModeAffichage
btnDarkMode.addEventListener('click',changerModeAffichage);

console.log(getCookie('darkModeActif'));
activerDarkMode();