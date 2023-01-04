//saisir le nombre
let nombre = parseInt(prompt('Nombre=?'));
// afficher la table de multiplication
for(let i = 1;i<=10;i++)
{
    console.log(`${nombre}x${i}=${i*nombre}`);
}
// avec un while
console.log('avec un while');
let i = 1;
while(i<=10)
{
    console.log(`${nombre}x${i}=${i*nombre}`);
    i++;
}

if ((i<0)&&(i==5)||(i!=1))
{

}