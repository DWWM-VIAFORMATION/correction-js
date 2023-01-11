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


/**
 * TESTS
 */
var portFolio = new PortFolio();;
chargerImages();
