// new Date()
let now = new Date();
alert(now); // affiche la date/heure actuelle

// new Date(millisecondes)
// 0 signifie 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);

// maintenant, ajoutez 24 heures, cela devient 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(Dec31_1969);

// new Date(datestring)
let date2017 = new Date("2017-01-26");
alert(date2017);
// La partie heure de la date est supposée être minuit GMT et
// est ajusté en fonction du fuseau horaire dans lequel le code est exécuté
// Donc, le résultat pourrait être
// jeu. 26 janv. 2017 11:00:00 GMT + 1100 (heure avancée de l'Est)
// ou
// mer. 25 janv. 2017 16:00:00 GMT-0800 (Heure standard du Pacifique)

//new Date(année, mois, date, heures, minutes, secondes, ms)
let date2011 = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date2011); // 1.01.2011, 02:03:04.567

// GETTERS
// date actuel
let date = new Date();

// l'heure dans votre fuseau horaire actuel
alert(date.getHours());

// l'heure dans le fuseau horaire UTC + 0 (heure de Londres sans heure avancée)
alert(date.getUTCHours());

// SETTERS
let today = new Date();

today.setHours(0);
alert(today); // encore aujourd'hui, mais l'heure est changée à 0

today.setHours(0, 0, 0, 0);
alert(today); // toujours aujourd'hui, maintenant 00:00:00 pile.

// auto correction!
let date2013 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date2013); // ...c'est le 1st Feb 2013!

// années bissextiles!
let date2016 = new Date(2016, 1, 28);
date2016.setDate(date2016.getDate() + 2);
alert(date2016); // 1 Mar 2016

// et dans 70 secondes?
let date70 = new Date();
date70.setSeconds(date70.getSeconds() + 70);

alert(date70); // montre la date correcte


let date2016bis = new Date(2016, 0, 2); // 2 Jan 2016
date2016bis.setDate(1); // met le jour 1 du mois
alert(date2016bis);
date2016bis.setDate(0); // la date minimum est le 1, le dernier jour du mois précédent devient alors la date
alert(date2016bis); // 31 Dec 2015


// mesurer l'écoulement du temps?
let start = new Date(); // démarre le compteur

// fait le travail
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // fin

alert( `The loop took ${end - start} ms` );

Date.parse(str) 
// cela va renvoyer le nombre de millisecondes
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms);

// cela va créer la date!
let dateParsed = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(dateParsed);

let date = new Date(2012, 0, 3);  // 3 Janvier 2012
alert( getWeekDay(date) );        // devrait afficher "TU"

let date = new Date(2012, 0, 3);  // 3 Janvier 2012
alert( getLocalDay(date) );       // mardi, devrait afficher 2

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
alert(date);// tojours le 2 janvier 2015 !

