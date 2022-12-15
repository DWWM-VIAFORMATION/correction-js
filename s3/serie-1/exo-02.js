// saisir le nombre d'étoile
let nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
//tant qu'il n'est pas dans l'intervalle
while((isNaN(nombreSaisi)||(!estDansIntervalle(nombreSaisi,1,10))))
{
// afficher emssage d'erreur
console.log('Le nombre saisi n\'est pas correct');
// demander de nouveau
nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
}
// ici je suis sur que la saisie est bien un nombre ET qu'il est compris entre 1 et 10 (bornes inclues)
console.log(retournerTexteEtoiles(nombreSaisi));
