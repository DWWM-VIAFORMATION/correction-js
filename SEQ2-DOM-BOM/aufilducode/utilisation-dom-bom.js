/**
 * DOCUMENT
 */
// affichage des propriétés du document HTML présent
console.log(document.body);
console.log(document.links);
console.log(document.head);
/**
 * WINDOW
 */
// récupération d'informations 
//propriétés
console.log(window.location);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
//console.log(window.prompt("test"));
//https://developer.mozilla.org/en-US/docs/We0n0b/API/Window
// événements
window.addEventListener('resize',()=>{console.log('on change la taille!');})
window.addEventListener('copy',()=>{console.log('Sale piwate! t a copié vilain!');})
window.addEventListener('copy',()=>{console.log('Sale piwate! t a copié vilain!');})
// méthodes
//window.addEventListener('copy',()=>{window.close();})
window.addEventListener('paste',()=>{window.open('https://www.google.com','width=500, height=500');})
let openLycos = document.querySelector('#openLycos')
openLycos.addEventListener('click',()=>{window.open('https://www.lycos.fr/','width=500, height=500');})
/**
 * NAVIGATOR
 */
// propriétés: pour récoup des infos
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.mediaDevices);
// des actions: methodes
// sos en morse
//navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])
function coordonnees(pos) {
    let crd = pos.coords;
  console.log(pos);
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}
navigator.geolocation.getCurrentPosition(coordonnees);
//document.querySelector('#back').addEventListener('click',()=>{console.log('bac');history.back()})
document.querySelector('#back').addEventListener('click',()=>{console.log('bac');history.go(-3)})
document.querySelector('#forward').addEventListener('click',()=>{console.log('forward');history.forward()})
/**LOCATION */
console.log(location.pathname);
console.log(location.port);
console.log(location.host);
console.log(location.hostname);
document.querySelector('#reload').addEventListener('click',()=>{console.log('reload');location.reload()})
console.log(location.protocol);
/** SCREEEN */
document.querySelector('#p4').innerHTML =
    'Dimensions totales de l\'écran : ' + screen.width + ' x ' + screen.height +
    '<br>Surface disponible : ' + screen.availWidth + ' x ' + screen.availHeight +
    '<br>Palette de couleur : ' + screen.colorDepth +
    '<br>Résolution : ' + screen.pixelDepth;
