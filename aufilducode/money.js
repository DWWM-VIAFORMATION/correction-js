//http://www.lingoes.net/en/translator/langcode.htm
//https://fr.iban.com/currency-codes
const euro = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'EUR',
 minimumFractionDigits: 2});
  
 const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2});

const angola = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'AOA',
 minimumFractionDigits: 2});

  
let prixHTVoiture = 15000;
console.log(`la voiture vaut ${euro.format(prixHTVoiture)}`);
console.log(`la voiture vaut ${dollar.format(prixHTVoiture)}`);
console.log(`la voiture vaut ${angola.format(prixHTVoiture)}`);