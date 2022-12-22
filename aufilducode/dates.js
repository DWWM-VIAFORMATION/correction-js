let div = document.querySelector('#ecran');

let now = new Date();
div.innerHTML+=now;

let Jan01_1970 = new Date(0);
div.innerHTML+=Jan01_1970;

let Jan02_1970 = new Date(0+24 * 60 * 60 * 1000);
div.innerHTML+=Jan02_1970;
let Dec31_1969 = new Date(-24 * 3600 * 1000);
div.innerHTML+=Dec31_1969;

let annivFormateur = new Date('1977-10-24')
div.innerHTML+=annivFormateur;

let date2011 = new Date(2011, 0, 1, 2, 3, 4, 567);
div.innerHTML+=date2011;
let dateNouvelAn = new Date(2022, 11, 31, 23, 59, 59, 0);
div.innerHTML+=dateNouvelAn;

div.innerHTML+=dateNouvelAn.getHours();
div.innerHTML+=dateNouvelAn.getUTCHours();

let today = new Date();
today.setUTCHours(16,30,0,0);
div.innerHTML+=today

let date2013 = new Date(2013, 0, 32); 
div.innerHTML+=date2013
let date2016 = new Date(2017, 1, 28);
date2016.setDate(date2016.getDate() + 2);
div.innerHTML+=date2016; // 1 Mar 2016

let date70 = new Date();
date70.setSeconds(date70.getSeconds() + 70);
div.innerHTML+=date70;

let date2016bis = new Date(2016, 0, 2); // 2 Jan 2016
date2016bis.setDate(1); // met le jour 1 du mois
div.innerHTML+=date2016bis;
date2016bis.setDate(0); 
div.innerHTML+=date2016bis;
/**
 * MESURE DE PERFORMANCE
 */
// */ mesurer l'écoulement du temps?
// let start = new Date(); // démarre le compteur
// // fait le travail
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date(); // fin
// alert( `The loop took ${end - start} ms` );

let str = "2022-12-24T23:59:00.0";

div.innerHTML+=new Date(Date.parse(str)) ;
