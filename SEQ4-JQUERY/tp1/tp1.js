jQuery(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
}
    );

    jQuery('#zoom').click(function(){
        zoomer();
    });

    jQuery('#dezoom').click(function(){
        deZoomer();
    });

    $(document).keyup(function(touche){
        // on écoute l'évènement keyup()
           var appui = touche.which || touche.keyCode; 
       // le code est compatible tous navigateurs grâce à ces deux propriétés
       switch (appui) {
        case 107:
                zoomer();
            break;
       case 109:
       deZoomer();
        default:
            console.log(appui);
            break;
       }
     
       })


function deZoomer() {
    console.log('click sur dezoom');
    $('#zoom').prop('disabled', false);
    $('#dezoom').prop('disabled', true);
    $('img').each(function () {
        console.log('une image trouvee! a dezoommer');
        $(this).css('height', '50vh');
    });
}

function zoomer() {
    console.log('click sur zoom');
    $('#zoom').prop('disabled', true);
    $('#dezoom').prop('disabled', false);
    $('img').each(function () {
        console.log('une image trouvee! a zoommer');
        $(this).css('height', '100vh');
    });
}

