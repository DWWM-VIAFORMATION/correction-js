//saisir le nombre d'etoiles
let nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
// tester si compris entre 1 et 10 inclus
while ((nombreEtoiles < 1) || (nombreEtoiles > 10)) 
{
    alert ('le nombre d\'etoiles est incorrect');
    nombreEtoiles = parseInt(prompt('Nb etoiles = ?'));
}
    // afficher n etoiles
    let etoiles = "";

    for (let i = 1; i <= nombreEtoiles; i++) {
        etoiles += "*";
        console.log(etoiles);

    }
    for (let i = 1; i <= nombreEtoiles; i++) {
        console.log("*".repeat(i));
    }

  
   

