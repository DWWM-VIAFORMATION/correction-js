// let longueur = prompt('Longueur?');
// let largeur = prompt('largeur?');
// let rectangle = new Rectangle(longueur,largeur);
// console.log(rectangle.calculerPerimetre());
// console.log(rectangle.calculerSurface());

let rayon;
do 
{
    rayon = prompt('Rayon?');
    console.log(Number.isInteger(parseFloat(rayon)));
    document.write(rayon)
}
while((isNaN(parseInt(rayon))||(parseInt(rayon)<=0)||(!Number.isInteger(parseFloat(rayon)))))


let cercle = new Cercle(rayon)
console.log(cercle.calculerPerimetre());
console.log(cercle.calculerSurface());