console.log("Demarré");
var fenetreCourante;
/**
 * Les fonctions
 */
function openWindow(pEvent)
{
    console.log('open');
    fenetreCourante= window.open('https://www.google.com','_blank')
}
function closeWindow(pEvent)
{
    console.log('close');
    fenetreCourante.close();
}
function resizeByWindow(pEvent)
{
    console.log('resizeBy');
    fenetreCourante.resizeBy(500,500);

}
function resizeToWindow(pEvent)
{
    console.log('resizeTo');
    fenetreCourante.resizeTo(250,250);
}
function afficherInfoGeoLoc(pEvent)
{
    console.log('afficherInfoGeoLoc');
    let reponse = window.confirm('Etes-vous d\'accord pour être localisé?');
    console.log(reponse);
        //if (reponse
    if (reponse == true)
    {
       navigator.geolocation.getCurrentPosition(quoiFaireQuandReponseGeoRecue)

    }
}
function quoiFaireQuandReponseGeoRecue(pPos)
{
    console.log('quoiFaireQuandReponseGeoRecue');
    console.log(pPos);
    let panneauInfoGeoLoc = document.querySelector('#p2');
    panneauInfoGeoLoc.innerText=`vous êtes situé ${pPos.coords.latitude}°LAT ${pPos.coords.longitude}°LON`;
    
}
/** Gestion des boutons et abonnement */
let btnOpen = document.querySelector('#open');
btnOpen.addEventListener('click',openWindow);
let btnClose = document.querySelector('#close');
btnClose.addEventListener('click',closeWindow);
let btnResizeBy = document.querySelector('#resizeBy');
btnResizeBy.addEventListener('click',resizeByWindow);
let btnResizeTo = document.querySelector('#resizeTo');
btnResizeTo.addEventListener('click',resizeToWindow);


let pInfo = document.querySelector('#p1');
pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
/**
 * Détection du changement de taille de la fenetre grace à l'objet window créé automatiquement (instance de la classe Window)
 */
window.addEventListener('resize',()=>{
    // ceci est une fonction anonyme
    console.log('resize');
    pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
})
let btnGeoloc = document.querySelector('#geoPosition');
btnGeoloc.addEventListener('click',afficherInfoGeoLoc)