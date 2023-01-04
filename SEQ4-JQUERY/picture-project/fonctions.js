function afficherPortFolio(pPortFolio)
{
    console.log($('#listeImages'))
    pPortFolio.listePicture.forEach(picture => {
        let image = document.createElement('img');
        image.src = picture.nomFichier;
        let texte = document.createElement('p');
        texte.innerText = picture.description;
       let boiteImage = document.createElement('div');
       boiteImage.appendChild(image);
       boiteImage.appendChild(texte);
       boiteImage.style.display="flex";
       boiteImage.style.flexDirection="column";
       boiteImage.style.flexWarp="warp";
       boiteImage.style.backgroundColor="red";
       boiteImage.width = 20%
       console.log(boiteImage);
       $('#listeImages').append(boiteImage);
    });
}
function afficherPar(pNombreParLigne)
{
    $('img').css('width',`${90/pNombreParLigne}%`);
}