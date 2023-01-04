// saisir un nombre d'étoile qui est bien un nombre entre 1 et 10 inclus
let nombreEtoileDemande = saisirNombreEtoiles(1,10);
for(let i=1;i<=nombreEtoileDemande;i++)
{
    console.log(retournerTexteEtoiles(i));
}