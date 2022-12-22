// NE PAS OUBLIER LE DEFER
// CODES EN ERREURS
let paragraphe = document.querySelectorAll('.paragraf')
paragraphe.style.backgroundColor="red"; // syntaxe correcte mais grosseuh erreur,il faudrait un for each ou alors remplacer querySelectorAll par querySelector

let paragraphe = document.querySelector('.paragraf') //on ne prend que le premier pagragraphe de la classe paragraf
paragraphe.style.backgroundColor="red";

let paragraphe = document.querySelector('#paragraf')// pas un # mais un point car les paragraphes n'ont pas d'identifiant dans le html
paragraphe.style.background-Color="bleu";// "background-Color" est l'attribut en CSS et doit etre corrigé en backgroundColor
paragraphe.style.flexDirection= "column";
// CODE CORRECT
let paragraphes = document.querySelectorAll('.paragraf')
paragraphes.forEach(paragraphe=>{
    paragraphe.style.backgroundColor = "red";
});

function faireCeciCela(event)
{
	console.log(event);
}
// CODES EN ERREUR
let bouton1 = document.querySelector('#action');//pas d'erreur
bouton1.addEventListener('clic',faireCeciCela);// click et pas clic

let bouton2 = document.querySelectorAll('#action');// attention pas de ALL ! il n'y a qu'un bouton!
bouton2.addEventListener('clic',faireCeciCela);// click et pas clic

let bouton3 = document.querySelector('.action');//on vise la classe et pas l'id, le bouton manque de classe (.action vise l'élement dont la class est "action")
boutons3.addEventListener('clic',faireCeciCela(action));//boutons3 n'existe pas, click et pas clic, pas de parenthese ni parametres dans l'appel faireCeciCela
// INFO: la fonction faireCeciCela est une fonction de "call back": quand l'événement se produit, la fonction est rappelée 