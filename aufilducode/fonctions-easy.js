// function afficherNombre(pNombre)
// {
//     let message = "";
//     for(let i=1;i <= pNombre;i++)
//     {
//         message = message + i;
//     }
//     return message;
// }


// let nombreSaisi=parseInt(prompt('saissez un nombre'));
// let resultatTexte = afficherNombre(nombreSaisi)
// console.log(resultatTexte);

function estPair(pNombre) {
    return (pNombre % 2 == 0)
}

function listerNombresPairs(pNombreMax) {
    let resultat = "";
    for (let i = 2; i <= pNombreMax; i++) {
        if (estPair(i))
            // console.log(i);
            resultat += "-" + i;
    }
    return resultat;
}


console.log(estPair(2));
console.log(estPair(5));

console.log(listerNombresPairs(5));
console.log(listerNombresPairs(20));
//console.log(listerNombresPairs(parseInt(prompt("nombre max?"))));


