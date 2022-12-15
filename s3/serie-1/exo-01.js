/**
 * Cette fonction retourne vrai lorsque le nombre pNombreVerifie est compris entre pBorneMini et pBorneMaxi (inclus!)
 * @param {*} pNombreVerifie 
 * @param {*} pBorneMini 
 * @param {*} pBorneMax 
 */
function estDansIntervalle(pNombreVerifie,pBorneMini, pBorneMax)
{
    let resultat = false;
    if ((pNombreVerifie>=pBorneMini)&&(pNombreVerifie<=pBorneMax))
    {
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
function retournerTexteEtoiles(pNombreEtoiles)
{
    let resultat = "";
    for(let i=1;i<=pNombreEtoiles;i++)
    {
        resultat = resultat +"*";
    }
    return resultat;
}
//saisir le nombre d'étoiles
let nombreSaisi = parseInt(prompt('Combien d\'étoiles?'));
// vérifier s'il est compris entre 1 et 10 inclus
if ((!isNaN(nombreSaisi))&&(estDansIntervalle(nombreSaisi,1,10)))
{
// si le nombre d etoile est ok: afficher les étoiles
    console.log(retournerTexteEtoiles(nombreSaisi));
}
else
{
// sinon afficher un message d'erreur
console.log("Saisie incorrecte");
}
