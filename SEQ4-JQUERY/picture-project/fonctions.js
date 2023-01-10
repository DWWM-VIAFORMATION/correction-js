function afficherPortFolio(pPortFolio) {
    console.log($('#listeImages'))
    

    pPortFolio.listePicture.forEach((picture,i) => {
        let image = document.createElement('img');
        console.log(picture.nomFichier);
        image.src = picture.nomFichier;
        image.style.height='auto'
        image.style.width="100%"
        image.id='image_'+i;
        // //image.innerText=" "
        //image.src = picture.nomFichier;
        let texte = document.createElement('p');
        texte.innerText = picture.description;
        let boiteImage = document.createElement('div');
        boiteImage.classList.add('boiteImage')
        boiteImage.appendChild(image);
        boiteImage.appendChild(texte);
        boiteImage.style.display = "flex";
        boiteImage.style.flexDirection = "column";
        boiteImage.style.flexWarp = "warp";
            boiteImage.style.width = `${(100-portFolio.perPicture*2) / portFolio.perPicture}%`
        //    boiteImage.style.maxHeight = `${100 / portFolio.perPicture*2}%`
       
        boiteImage.style.maxHeight = `${window.innerHeight/(portFolio.perPicture)}px`
        boiteImage.id='image_'+i;
       // boiteImage.width = "100%"
        console.log(boiteImage);
        $('#listeImages').append(boiteImage);
i++;
    });
}

function updatePorFolio(pPortFolio)
{
console.log(pPortFolio.perPicture);
    $('.boiteImage').css('width',`${(100- pPortFolio.perPicture*2) / pPortFolio.perPicture}%`);
    $('.boiteImage').css('maxHeight',`${window.innerHeight/(pPortFolio.perPicture)}px`)
}
