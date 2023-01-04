//saisir nombre
let nombre = parseInt(prompt("Nombre=?"))
//calculer la factiorielle
let resultat = 1;
for(let i = 1;i<=nombre;i++)
{
    resultat*=i
    //resultat = resultat *i;
}
//afficher le résultat
console.log(`${nombre}! = ${resultat}`);

// avec un while
resultat= 1;
let i = 1;
while (i<=nombre)
{
    resultat*=i;
    i++;
}


console.log(` avec le while ${nombre}! = ${resultat}`);