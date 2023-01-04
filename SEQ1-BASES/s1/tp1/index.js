/* 
variable rayon en entier
variable aireCercle en flottant
lire rayon
aireCercle <- puissance(rayon,2) * PI
*/
let rayon = prompt("rayon du cercle?")
let aireCercle = Math.pow(parseInt(rayon),2)*Math.PI;
alert("aire du cercle de rayon ="+rayon+" = "+aireCercle);