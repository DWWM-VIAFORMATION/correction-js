// Demander une temperature en °C 
let temperatureCelsius = parseInt(prompt('Quelle est la temperature en °C?'))
// convertir en kelvin
let temperatureKelvin = temperatureCelsius+273.15;
// afficher dans la console
console.log(`la temperature de ${temperatureCelsius}°C donne en kelvin: ${temperatureKelvin}K`);