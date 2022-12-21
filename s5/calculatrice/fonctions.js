function ajouterOperation(event) {
    let tampon = document.querySelector('#tampon');
    console.log(event.srcElement);
    tampon.value += event.srcElement.value;
}
function ajouterChiffre(event) {
    let tampon = document.querySelector('#tampon');
    console.log(event.srcElement);
    tampon.value += event.srcElement.value;
}
function evaluerExpression(event) {
    let tampon = document.querySelector('#tampon');
    let ecran = document.querySelector('#ecran');
    let resultat =  eval(tampon.value);
    ecran.innerHTML =resultat;
    tampon.value =resultat;
    console.log(ecran);
}
function effacerExpression(event)
{
    let tampon = document.querySelector('#tampon');
    tampon.value="";
}
function effacerLastExpression(event)
{
    let tampon = document.querySelector('#tampon');
    tampon.value=tampon.value.substring(0, tampon.value.length - 1);;
}