/**
 * Cette fonction retourne vrai lorsque le nombre pNombreVerifie est compris entre pBorneMini et pBorneMaxi (inclus!)
 * @param {*} pNombreVerifie 
 * @param {*} pBorneMini 
 * @param {*} pBorneMax 
 */
function estDansIntervalle(pNombreVerifie, pBorneMini, pBorneMax) {
    let resultat = false;
    if ((pNombreVerifie >= pBorneMini) && (pNombreVerifie <= pBorneMax)) {
        resultat = true;
    }
    return resultat;
    // en plus court
    //return ((pNombreVerifie>=pBorneMini)&&(pNombreVerifie<=pBorneMax));
}
/**
 * Cette fonction retourne un texte composé d'un nombre d'étoiles (*), ce nombre étant fixé par le paramètre pNombreEtoiles
 * @param {*} pNombreEtoiles 
 */
function retournerTexteEtoiles(pNombreEtoiles) {
    let resultat = "";
    for (let i = 1; i <= pNombreEtoiles; i++) {
        resultat = resultat + "*";
    }
    return resultat;
}
/**
 * Cette fonction permet de saisir un nombre compris dans l'intervalle  pBorneMini à pBorneMaxi (inclus!) et que c'est bien un NOMBRE!
 * @param {*} pBorneMini 
 * @param {*} pBorneMax 
 * @returns le nombre saisi
 */
function saisirNombreEtoiles(pBorneMini, pBorneMax) {
    // saisir le nombre d'étoile
    let nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
    //tant qu'il n'est pas dans l'intervalle
    while ((isNaN(nombreSaisi) || (!estDansIntervalle(nombreSaisi, pBorneMini, pBorneMax)))) {
        // afficher emssage d'erreur
        console.log('Le nombre saisi n\'est pas correct');
        // demander de nouveau
        nombreSaisi = parseInt(prompt('Quel nombre d\'étoile voulez-vous?'));
    }
    return nombreSaisi;
}

function faireuneTarte(pNombreConvives)
{
    return "vl'a la tarte";
}

/**
 * Cette fonction permet de saisir un nombre compris dans l'intervalle  pBorneMini à pBorneMaxi (inclus!) et que c'est bien un NOMBRE!
 * @param {*} pBorneMini 
 * @param {*} pBorneMax 
 * @returns le nombre saisi
 */
function saisirNombreEntier(pBorneMini, pBorneMax,pQuestion,pInfoSaisieErreur) {
    // saisir le nombre 
    let nombreSaisi = parseInt(prompt(pQuestion));
    //tant qu'il n'est pas dans l'intervalle
    while ((isNaN(nombreSaisi) || (!estDansIntervalle(nombreSaisi, pBorneMini, pBorneMax)))) {
        // afficher message d'erreur
        console.log('Le nombre saisi n\'est pas correct');
        // demander de nouveau
        nombreSaisi = parseInt(prompt(pInfoSaisieErreur+" - "+pQuestion));
    }
    return nombreSaisi;
}
/**
 * Cette fonction retourne un nombre tiré aléatoirement entre pMin et pMax inclus
 * @param {*} pMin borne mini
 * @param {*} pMax borne maxi
 * @returns nombre entier entre pMin et pMax
 */
function tirerNombreEntierHasardDansIntervalle(pMin,pMax)
{
    return Math.round(Math.random() * (pMax - pMin) + pMin);
}