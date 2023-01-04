jQuery(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
}
    );

    jQuery('#zoom').click(function(){
        console.log('click sur zoom');
        $('#zoom').prop('disabled', true);
        $('#dezoom').prop('disabled', false);
        $('img').each(function()
        {
            console.log('une image trouvee! a zoommer');
            $(this).css('height','100vh');
        })
    });
    jQuery('#dezoom').click(function(){
        console.log('click sur dezoom');
        $('#dezoom').prop('disabled', true);
        $('#zoom').prop('disabled', false);
        $('img').each(function()
        {
            console.log('une image trouvee!a dezoommer');
            $(this).css('height','25vh');
        })
    });
    $(document).keyup(function(touche){
        // on écoute l'évènement keyup()
           var appui = touche.which || touche.keyCode; 
       // le code est compatible tous navigateurs grâce à ces deux propriétés
      console.log(appui);
       });


       
