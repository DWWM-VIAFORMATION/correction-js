function onProgress(pEvent) {
    console.log(`chargement: ${((pEvent.loaded / pEvent.total) * 100).toFixed(0)}%`);
}
function onError() {
    console.log('ERREUR RESEAU');
}
function onLoad() {
    console.log(xhr.status);
    console.log(xhr.response);
    let meteo = JSON.parse(xhr.response)
    let paragrapheInfo = document.querySelector('#info');
    paragrapheInfo.innerHTML = `il fait ${meteo.main.temp}°C le temps est ${meteo.weather[0].description} et je vous localisé grace à votre position dans la ville de:${meteo.name}`;
    let image =document.querySelector('#temps');
    image.src=`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`
}
function demanderMeteo(pPosition) {
    
    const apiKey = "fa36db5e87babab2d66fd8c6fd057c0e";
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${pPosition.coords.latitude}&lon=${pPosition.coords.longitude}&appid=${apiKey}&units=metric&lang=fr`)
    xhr.send()
    xhr.onload = onLoad
    xhr.onerror = onError
    xhr.onprogress = onProgress;
}