//saisir le nombre d'etoiles
let nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
// tester si compris entre 1 et 10 inclus
if ((nombreEtoiles > 0) && (nombreEtoiles < 11)) {
    // afficher n etoiles
    let etoiles = "";

    for (let i = 1; i <= nombreEtoiles; i++) {
        etoiles += "*";
    }
    console.log(etoiles);
    console.log("*".repeat(5));

}
else // sinon
{
    // afficher msg d'erreur
    console.log('le nombre d\'etoiles est incorrect');
}

