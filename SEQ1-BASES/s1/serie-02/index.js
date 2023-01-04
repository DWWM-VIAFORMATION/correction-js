// recuperer le paragraphe HTML avec comme identifiant p1
let p1 = document.getElementById('p1');
// saisir x et y
let x = parseInt(prompt('X=?'));
let y = parseInt(prompt('y=?'));
// tester si x est plus grand que y et afficher "x est plus grand que y"
let message="";

if (x>y)
    message = `le nombre ${x} est plus grand que le nombre ${y}`;
else
    message = `le nombre ${x} est plus petit ou égal que le nombre ${y}`;
console.log(p1);
p1.innerHTML= message;