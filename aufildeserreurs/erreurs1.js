/**
 * LES VARIABLES
 */
// déclation d'une variable contenant une chaîne texte
let prenom = "thierry";
// déclation d'une variable contenant un nombre
let age = 45;
// déclation d'une variable contenant un nombre réel
let taille= 1.70;
// déclation d'une variable contenant un booleen
let estFormateur = true;
// rappels: nom de variable clair, en camelCase
// ERREURS COMMUNES
// var variable = thierry;
// let prénom = 'Thierry'
// let prénom = 'Christophe';
// let tailleEnCentimetre = 1,70;
// erreurs:
// - pas d'accents ni caractères spéciaux
// - ne pas déclarer deux fois la variable prénom dans le bloc d'instruction
// - la virgule dans un nombre est bien le caractère .age
// - les chaines de caractères sont entourées par soit : " " ' ' ou ` `
// - var à proscrire
// - attention au ;
/**
 * Blocks d'instructions
 */
if (estPair)
{
    let variable = 0;
    alert('true');
}
else
    alert ('false');
// Rappels: 
// - les blocs d'instruction commencent par { et finissent par } (altgr + 4 et altgr+ +)
// - la variable "variable" existe a partir de la ligne ou elle est déclarée, la ou il y a le "let" et jusqu'à l'accolate de fin du bloc) (elle n'existe pas ici dans le else)
// if (estPair)
// {
//     let variable = 0;
//     alert('true');
// }
// console.log(variable)
// else
//     alert ('false');
// alert(variable)
// erreurs:
// - console log n'est pas bien placé dans le bloc d'instruction
// - pas de point virgule
// - variable a été déclarée dans le bloc d'instruction du if et n'existe pas en dehors
// -- les accolades ne sont pas obligatoire mais ici alert(variable) s'exécutera dans tous les cas.
/** Operateurs */
let nombre = 0;
nombre= nombre+1;
nombre += 1;
nombre++;
// erreur:
//nombre4++ incrémente la variable nombre 4 de 1

/**concatenations */
let texte ="le nombre est";
console.log(texte+nombre);
// le resultat affiché dans la console du navigateur est:"le nombre est3"
// rappel: quand on ajoute quelque type de variable que ce soit à une variable contenant du texte, ou du texte, tout devient texte
// on appelle ca la concatenation
console.log(`${texte} ${nombre}`);
/**
 * Les expressions booléennes
 */
let nombre1 =10;
let nombre2 = 20;
console.log((nombre1 > nombre2));// nombre 1 plus grand que nombre2 
console.log((nombre1 < nombre2));// nombre 1 plus petit que nombre2 
console.log((nombre1 >= nombre2));// nombre 1 plus grand ou egal que nombre2 
console.log((nombre1 <=nombre2));// nombre 1 plus petit ou egal que nombre2 
console.log((nombre1 == nombre2));// nombre 1  egal a nombre2 
console.log((nombre1 != nombre2));// nombre 1 différent  nombre2 
// erreurs 
//console.log((nombre1 = nombre2));
// affichera toujours vrai parce que l'affectation fonctionne toujours et retourne "true" car réussie
// le resultat sera que nombre1 aura recu la valeur de nombre2
/**
 * BOUCLE FOR
 */
for(let i = 0; i<10;i++)
{
    console.log(i);
}
// RAPPEL:
// - on incrémente (i++) ou décrémente (i--) la variable déclarée dans la premiere partie de la formule (let i)
// - on fait varier i depuis la valeur initiale (i = 0) tant que la condition dans la deuxieme partie est vérifiée
// ERREURS
// for(let i = 0; j<10;i++)
// {
//     console.log(i);
// }
// attention dans le for, on manipule juste une variable (pas de j)

// for(let i = 0; i<10;i++)
// {
//     console.log(i);
//     i++;
// }
// on ne fait qu'afficher ou utiliser la variable impliquée dans le for, on n'en change surtout pas la valeur   
// for(let i = 0; i<10;i++)
// {
//     let i = 0;
//     console.log(i);
//     i++;
// }
// on ne fait qu'afficher ou utiliser la variable impliquée dans le for, on n'en change surtout pas la valeur, on  ne la redefinie pas non plus
// for(let i = 0; i<10;i--)
// {
//     console.log(i);
// }
//boucle infini, on diminue la valeur de i, elle restera toujours inférieure à 10

/**
 * While / do While
 */
let nombre3 = 0;
do 
{
    console.log(nombre3);
    nombre3 ++;
}
while(nombre3<10);

while(nombre3<10); 
{
    console.log(nombre3);
    nombre3 ++;
}
// va afficher dans le terminal : 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// la deuxieme boucle ne sera pas exécutée, le while teste d'entrée de jeu la condition avant de répéter une premiere fois le bloc d'instruction
// eureurs:
// - oubli de modifier la valeur testée dans la condition de répétition

/**
 * fonctions
 */
// déclaration
function faireOperation(pParametre1, pParametre2)
{
    return pParametre1+pParametre2;
}
let nombre4 = 0;
let nombre5 = 1;
console.log(faireOperation(nombre4,nombre5));

//erreurs
// let lenombre =5
// function ajouter1(lenombre)
// {
//     ajouter1 = lenombre+1;
//     return ajouter1;
// }
// attention on utilise pas le nom d'une fonction comme nom de variable!
// function faireOperation(pParametre1, pParametre2)
// {
// 	let resultat = nombre6+nombre7;
//     return resultat;
//     console.log(resultat);// cette instruction ne sera jamais exécutée
// }
// let nombre6 = 0;
// let nombre7 = 1;
// console.log(resultat);
// ERREURS
// on utilise pas les parametres
// on appelle pas la fonction
//resultat n'est pas affichage dans le console.log car pas dans la portée (scope);