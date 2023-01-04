//saisie nombre
let nombre = parseInt(prompt('Nombre à élever à une puissance=?'));
// saisie exposant
let exposant = parseInt(prompt('exposant=?'));
//calculer la puissance
let resultat = 1;
for(let i=1;i<=exposant;i++)
{
    console.log(i);
    resultat *=nombre
}
// afficher dans la console
console.log(`methode 1: ${nombre}^${exposant}= ${resultat}`);
// autre solution
resultat = nombre;
for(let i=1;i<exposant;i++)
{
    console.log(i);
    resultat *=nombre
}
// afficher dans la console
console.log(`methode 2: ${nombre}^${exposant}= ${resultat}`);

// avec un while
resultat = 1;
let i = 1;
while(i<=exposant)
{
    console.log(i);
    resultat *=nombre
    i++;
}
console.log(`methode 3 - while: ${nombre}^${exposant}= ${resultat}`);