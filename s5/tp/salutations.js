function saluer(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    //console.log(event);
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    //console.log(document.querySelector('#prenom'));
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";
    else
        message = `Bonjour ${prenom} ${nom}`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;

        default:
            emote = emoteHumain();
            break;
    }

    // message suivant le rang
    let rang = document.querySelector('input[name=rank]:checked').value;
    switch (rang) {
        case 'roturier':
                emote+=emoteRoture();
            break;
        case 'noble':
            emote+=emoteNoblesse();
            break;
        default:
            emote+=emoteRoyaute();
            break;
    }
    emote+=`. le personnage a ${getNombreClasse()} classe(s)`;
    alert(emote);
    let paragrapheClasses = document.querySelector('#classes');
    paragrapheClasses.innerHTML = listerLesClasses();

}
function saluerSansAlertes(event)
{
 // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // on affiche tout par défaut, et il n'y a pas d'erreur !
    document.querySelector('#error').innerHTML="";
    document.querySelector('#message').style.display='block';
    // vérifier les trois classes
    // test de garde !
    if ((getNombreClasse()==0)||getNombreClasse()>3)
        {
            document.querySelector('#message').style.display='none';
            document.querySelector('#classes').innerHTML="";
            document.querySelector('#error').innerHTML = `Vous ne pouvez pas avoir ${getNombreClasse()} classe(s): entre 1 et 3 maximum.`;
        return;
        }

    //console.log(event);
    let message = genererMessageSalutationAvecNomPrenom();
    let emote = genererEmoteRaciale();
    // message suivant le rang
    emote += genererEmoteRangSocial();
    let paragrapheMessage= document.querySelector('#salutations')
    paragrapheMessage.innerHTML = message;

    let paragrapheEmotes= document.querySelector('#emotes')
    paragrapheEmotes.innerHTML = emote;

    let paragrapheClasses = document.querySelector('#classes');
    paragrapheClasses.innerHTML = listerLesClasses();
}

function genererEmoteRangSocial() {
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote ="";
    switch (rang) {
        case 'roturier':
            emote = emoteRoture();
            break;
        case 'noble':
            emote = emoteNoblesse();
            break;
        default:
            emote = emoteRoyaute();
            break;
    }
    return emote;
}

function genererEmoteRaciale() {
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;

        default:
            emote = emoteHumain();
            break;
    }
    return emote;
}

function genererMessageSalutationAvecNomPrenom() {
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    //console.log(document.querySelector('#prenom'));
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";

    else
        message = `Bonjour ${prenom} ${nom}`;
    return message;
}

function getNombreClasse()
{
    let classes= document.querySelectorAll('.classe:checked');
    return classes.length;
}

function listerLesClasses()
{
    let classes= document.querySelectorAll('.classe:checked');
    let message = "<ul>";
    classes.forEach(classe => {
        message+=`<li>${classe.name}</li>`;
    });
    return message; 
}


function emoteHumain() {
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe() {
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque() {
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteRoture() {
    return "Le garde fait un signe de tête. ";
}
function emoteNoblesse() {
    return "Le garde s’incline respectueusement.";
}
function emoteRoyaute() {
    return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément.";
}

