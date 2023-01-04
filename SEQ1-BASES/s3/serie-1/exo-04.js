// PARAMETRAGES DE LA DIFFICULTE DU JEU!!
const constNombreMini = 1;
const constNombreMaxi = 5;
const constNombreEssaisMax = 3;
// PARAMETRAGES DE LA DIFFICULTE DU JEU!!

// tirer un nombre au hasard dans l'intervalle [constNombreMini,constNombreMaxi]
let random = tirerNombreEntierHasardDansIntervalle(constNombreMini,constNombreMaxi)
let propositionNombre =0;
let nombreEssais =0;

do {
    //saisir un nombre
   // propositionNombre = parseInt(prompt('proposez un nombre'));
   propositionNombre = saisirNombreEntier(constNombreMini, constNombreMaxi,`Saississez un nombre entier entre ${constNombreMini} et ${constNombreMaxi}`,`Vous devez saisir un NOMBRE entre ${constNombreMini} et ${constNombreMaxi}, attention!!!"`);
   nombreEssais++;
    // tester si plus grand
    if (propositionNombre > random) {
        // afficher "trop grand"
        alert(`${propositionNombre} est trop grand`);
    }
    if (propositionNombre < random) {
        // afficher "trop petit"
        alert(`${propositionNombre} est trop petit`);
    }
}
while ((propositionNombre != random)&&(nombreEssais<constNombreEssaisMax));

//tant que different du nombre tiré au hasard
if (propositionNombre===random)
alert(`BRAVOOOOO!, vous avez trouvé en ${nombreEssais} essais`);
else
alert('PAS BRAVO BOOOUH')