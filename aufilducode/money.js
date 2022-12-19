const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });
  console.log(euro.format(8000)); 
  console.log(euro.format(25));
  console.log(euro.format(99600023147));

  const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  console.log(usd.format(8000)); 
  console.log(usd.format(25));
  console.log(usd.format(99600023147));

  1
/** JavaScript: crée la date "04/06/1999 00h00" */
// Date(year, month, day)
let birth = new Date(1977, 9, 24)
// Création à partir d'une chaîne AAAA-MM-DD
birth = new Date('1977-10-24')
console.log(birth);
2
let currentTime = new Date()
console.log(currentTime);
/** JavaScript */
let today = new Date()
console.log('Nous sommes le ' + (today.getMonth() + 1) + ' ème mois de l\'année')

let firstDay = new Date()
firstDay.setDate(1)
console.log('Premier jour du mois en cours: ' + firstDay)

 today = new Date()
console.log(today) 
console.log(today.getDate()) 
console.log(today.getMonth()) 
console.log(today.toISOString())
console.log(today.toLocaleString(undefined, {year:'numeric', month: 'numeric', day: 'numeric'}))
console.log(today.toLocaleString(undefined, {year:'numeric', month: 'long', day: 'numeric', weekday: 'short'})) 

const day = new Date()
let lastMonth = new Date(day)
const newMonth = lastMonth.getMonth() - 1
// Remplace par le mois soustrait
lastMonth.setMonth(newMonth)
console.log(lastMonth)

 birth = new Date(1930, 7, 1)
const death = new Date(2002, 0, 23)
let lifetime = death.getFullYear() - birth.getFullYear() // calcule la différence entre les années
if (death.getMonth() < birth.getMonth()) { // retire un an si le dernier anniversaire n'est pas atteint
  lifetime -= 1
}
console.log('Pierre Bourdieu est mort à ' + lifetime + ' ans')