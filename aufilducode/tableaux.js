let notes = new Array();
let somme =0;
let moyenne = 0.0;
for (let i = 0; i <2; i++) {
     //notes[i]=parseInt(prompt('note n°'+i+"=?"));
     //console.log(noteSaisie); la variable n'existe pas encore, et donc le code plante
     let noteSaisie = parseInt(prompt('note n°'+i+"=?"));
     notes.push(noteSaisie);
}

console.log(notes);
// for (let i = 0; i <12; i++) {
//     somme+=notes[i];
// }
notes.forEach(note => {
    console.log(note);
    somme+=note;
});
moyenne = somme/notes.length;
alert(`la moyenne de la classe est de :${moyenne.toFixed(1)}`);
