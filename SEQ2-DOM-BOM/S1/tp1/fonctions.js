/** exo1
 * change la couleur du background du body, accédé via le dom
 * @param {*} pEvent événement click récupéré lors de l'appel
 */
function changerCouleurAlea(pEvent)
{
    document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}
/** exo 2
 * passe du blanc au noir et du noir au blanc
 * @param {*} pEvent événement click récupéré lors de l'appel
 */
function changerDarkLightMode(pEvent)
{
    // document.body.style.backgroundColor=="white"?document.body.style.backgroundColor = "black":document.body.style.backgroundColor = "white";
    // document.body.style.backgroundColor=="white"?document.body.style.color = "black":document.body.style.color = "white";

     if (document.body.style.backgroundColor=="white")
         {
             document.body.style.backgroundColor = "black";
             document.body.style.color = "white";
         }
         else
         {
             document.body.style.backgroundColor = "white";
             document.body.style.color = "black";
         }
}

function ajouterTitre(pEvent)
{
    console.log('ajouter un titre');
    let newH1 = document.createElement("h1");
    let titre = prompt('Nouveau titre?');
    newH1.innerText = titre;
    let parent = document.querySelector('main');
    parent.appendChild(newH1);
}

function masquerAfficher(pId)
{
    console.log('masquerAfficher:'+pId);
    let element = document.querySelector('#'+pId);
    element.style.display=="none"?element.style.display="block":element.style.display="none"
}
function masquerAfficherPara(event)
{
    console.log(event);
    masquerAfficher(event.srcElement.value)
}
function ajouterParagraphe(pEvent)
{
    console.log('ajouter un paragraphe n°'+nbParagraphe);
    //creer le paragraphe
    let newPara = document.createElement("p");
    let texte = prompt('Saisisse le texte du paragraphe?');
    newPara.innerText = texte;
    newPara.style.display="block";
    newPara.id="para"+nbParagraphe;
// creer le bouton
    let newBouton = document.createElement('button');
    newBouton.innerText =" masquer/afficher";
    newBouton.value="para"+nbParagraphe;
    newBouton.addEventListener('click',masquerAfficherPara)

    let parent = document.querySelector('main');
    parent.appendChild(newPara);
    parent.appendChild(newBouton);
    nbParagraphe++;
}