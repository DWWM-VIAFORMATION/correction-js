

function afficherEtoiles(pNombreEtoiles) {
    console.log('debut:afficherEtoiles('+pNombreEtoiles+')');
    let chaineEtoile = "";
    for (i = 1; i <= pNombreEtoiles; i++) {
        chaineEtoile += "*";
    }
    
    console.log('fin:afficherEtoiles('+pNombreEtoiles+')');
    return chaineEtoile;
}
//console.log(pNombreEtoiles); ne fonctionne pas parce que la variable pNombreEtoiles n'existe que dans la fonction
console.log(afficherEtoiles(5));//5
console.log(afficherEtoiles(4));//4
console.log(afficherEtoiles(3));//3
console.log(afficherEtoiles(2));//2
console.log(afficherEtoiles(1));//1
