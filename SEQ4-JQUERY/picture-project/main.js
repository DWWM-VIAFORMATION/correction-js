jQuery(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
});
/**<button id="uneparune">1</button>
        <button id="deuxpardeux">2</button>
        <button id="quatreparquatre">4</button>
        <button id="huitparhuit">8</button>
        <button id="dixpardix">10</button>
        <button id="vertical">vertical</button>
        <button id="horizontal">horizontal</button> */
jQuery('#uneparune').click(function()
{
    afficherPar(1);
})
jQuery('#deuxpardeux').click(function()
{
    afficherPar(2);
})
jQuery('#quatreparquatre').click(function()
{
    afficherPar(4);
})
jQuery('#huitparhuit').click(function()
{
    afficherPar(8);
})
jQuery('#dixpardix').click(function()
{
    afficherPar(10);
})
/**
 * TESTS
 */
let portFolio = new PortFolio();
portFolio.addPicture(new Picture('pictures/IMG_5366.jpg','Rémi'));
portFolio.addPicture(new Picture('pictures/IMG_5367.jpg','Brendon, James et Laurent'));
portFolio.addPicture(new Picture('pictures/IMG_5368.jpg','Dylan'));
portFolio.addPicture(new Picture('pictures/IMG_5376.jpg','Nathalie et Rémi'));
portFolio.addPicture(new Picture('pictures/IMG_5377.jpg','Laurent et James'));
portFolio.addPicture(new Picture('pictures/IMG_5379.jpg','Ilan'));
console.log(portFolio);
afficherPortFolio(portFolio);