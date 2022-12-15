/**
 * Cette fonction ajoute toutes les valeurs entières contenu dans le tableau d'entier
 * @param {*} pTableauEntiers 
 * @returns la somme des valeurs du tableau
 */
function faireSommeElementsTableau(pTableauEntiers) {
    let somme = 0;
    for (let i = 0; i < pTableauEntiers.length; i++) {
        somme += pTableauEntiers[i];
    }
    return somme;
    /*pTableauEntier.forEach(valeurCase => {
        somme+=valeurCase;
    });*/
}/**
 * cette fonction calcul la moyenne des valeurs
 * @param {*} pTableauEntiers 
 * @returns moyenne (nombre réel)
 */
function faireMoyenneTableau(pTableauEntiers) {
    return faireSommeElementsTableau(pTableauEntiers) / pTableauEntiers.length;
}
/**
 * Cette fonction vérifie si le tableau de lettres est un palindrome: Le palindrome est un cas particulier d'anacyclique (lequel est lui-même un cas particulier d'anagramme), pour lequel la signification est la même dans les deux sens de lecture.
 * @param {*} pTableauLettres 
 * @returns vrai si c'est un  palindrome
 */
function estPalindrome(pTableauLettres) {

    let i = 0;
    let resultat = true;
    do {
        if (pTableauLettres[i] != pTableauLettres[pTableauLettres.length - 1 - i]) {
            resultat = false;
        }
        i++;
    }
    while ((i < (pTableauLettres.length / 2)) && (resultat));
    return resultat;
}
function estTableauEntierCroissant(pTableauEntiers) {
    if (pTableauEntiers.length == 1)
        return true;

    let resultat = true;
    let i = 1;
    do {
        if (pTableauEntiers[i] < pTableauEntiers[i - 1]) {
            resultat = false;
        }
        i++;
    }
    while ((i < pTableauEntiers.length) && (resultat))
    return resultat;
}
function retournerTableauMois(pLangue)
{
    let tableauMois;
   if (pLangue=='fr') 
   tableauMois=['Janvier','Fevrier','Mars'];
   else
   if (pLangue=='en') 
   tableauMois=['Janurary','February','March'];
   else
    tableauMois=['Enero','Febrero','Marzo'];
     return tableauMois;
}