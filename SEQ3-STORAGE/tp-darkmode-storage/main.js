// récupération du bouton de changement de mode grace à son ID
let btnDarkMode = document.querySelector('#btnDarkMode');
// association de l'événement click, du bouton avec la fonction changerModeAffichage
btnDarkMode.addEventListener('click',changerModeAffichage);

let btnOublier = document.querySelector('#btnOublier');
btnOublier.addEventListener('click',oublier)

console.log(getCookie('darkModeActif'));
activerDarkMode();