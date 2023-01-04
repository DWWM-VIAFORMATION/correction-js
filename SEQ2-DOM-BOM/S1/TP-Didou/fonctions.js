function changerImageAnimal(pEvent)
{
    console.log(pEvent.srcElement.value);
    console.log(pEvent.srcElement.id);
    let image = document.querySelector('#id_image');
    console.log(image.src);
    image.src = pEvent.srcElement.value
    let texte = document.querySelector('#id_quoi');
    texte.innerText=pEvent.srcElement.id;
}
function changerImageCaroussel(pEvent)
{
    let image = document.querySelector('#id_image');
    image.src = pEvent.srcElement.src
}
