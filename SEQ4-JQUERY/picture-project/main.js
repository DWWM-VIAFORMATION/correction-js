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
  $('#customRange').change(function (e) { 
    e.preventDefault();
    console.log('change customRange');
    console.log($('#customRange')[0].value);
    portFolio.perPicture=$('#customRange')[0].value;
    updatePorFolio(portFolio);
  });

// jQuery('#uneparune').click(function()
// {
//     afficherPar(1);
// })

/**
 * TESTS
 */
var portFolio = new PortFolio();
portFolio.addPicture(new Picture('pictures/IMG_5366.jpg','Rémi'));
portFolio.addPicture(new Picture('pictures/IMG_5367.jpg','Brendon, James et Laurent'));
portFolio.addPicture(new Picture('pictures/IMG_5368.jpg','Dylan'));
portFolio.addPicture(new Picture('pictures/IMG_5376.jpg','Nathalie et Rémi'));
portFolio.addPicture(new Picture('pictures/IMG_5377.jpg','Laurent et James'));
portFolio.addPicture(new Picture('pictures/IMG_5379.jpg','Ilan'));
console.log(portFolio);
afficherPortFolio(portFolio);
$('.boiteImage').click(function (e) { 
    e.preventDefault();
    console.log('change zoomDezoom');
    console.log($('#'+e.target.id).css('width').replace('px',''));
    if (parseFloat($('#'+e.target.id).css('width').replace('px',''))<window.innerWidth/2)
    { 
        console.log('zooom');
        $('#'+e.target.id).css('width',window.innerWidth+'px')
        $('#'+e.target.id).css('height',window.innerHeight+'px')
        $('#'+e.target.id).css('max-height',window.innerHeight+'px')
}
    else
    {
        console.log('dzoom');
        $('#'+e.target.id).css('width',`${(100-portFolio.perPicture*2) / portFolio.perPicture}%`)
        //    boiteImage.style.maxHeight = `${100 / portFolio.perPicture*2}%`
        $('#'+e.target.id).css('max-height',`${window.innerHeight/(portFolio.perPicture)}px`)
    }
       
    });