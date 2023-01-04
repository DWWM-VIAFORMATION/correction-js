// je crée une variable boutons et j'y affecte la liste des élements
// html qui ont pour class "btnAnimal"
let boutons = document.querySelectorAll('.btnAnimal')

//boutons est une liste, donc je la parcours avec un foreach
boutons.forEach(bouton => {
    // pour chaque bouton, on abonne à l'événement click
    bouton.addEventListener('click',changerImageAnimal)
});

let images = document.querySelectorAll('.imgAnimal');
images.forEach(image => {
    image.addEventListener('mouseover',changerImageCaroussel);
});