/**
 * en fonction du mode demandé, elle change le mode de couleur
 */
function changerDarkMode(pDarkModeActif) {
    if (pDarkModeActif == true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
       // document.cookie = "darkModeActif=false;max-age=60*60";
       //sessionStorage.setItem("darkModeActif",false)
       localStorage.setItem("darkModeActif",false)
       //sessionStorage.setItem("style",JSON.stringify(document.body.style))
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        //document.cookie = "darkModeActif=true;max-age=60*60";
        //sessionStorage.setItem("darkModeActif",true)
        localStorage.setItem("darkModeActif",true)
        //sessionStorage.setItem("style",JSON.stringify(document.body.style))
    }
}
/**
 * Cette fonction est appelée lors du click sur le bouton.
 * Elle détermine si le dark mode est actif en vérifiant la couleur de fond
 * elle appelle alors le changement de mode
 * @param {*} pEvent 
 */
function changerModeAffichage(pEvent) {
    console.log('changerModeAffichage');
    let etreEnDarkMode = (document.body.style.backgroundColor == "black")
    console.log(etreEnDarkMode);
    changerDarkMode(etreEnDarkMode);
}
/**
 * Cette fonction est appelée lors du chargement de la page et restaure le dark mode activé
 * @param {*} pDarkModeDemande 
 */
function activerDarkMode() {
    //récupérer le dark mode depuis le cookie
    console.log(sessionStorage.getItem('darkModeActif'));
   // console.log(sessionStorage.getItem('style'));
   // let etreEnDarkMode = getCookie('darkModeActif');
   //let etreEnDarkMode = sessionStorage.getItem('darkModeActif');
   let etreEnDarkMode = localStorage.getItem('darkModeActif');
   
    if (etreEnDarkMode == 'true') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}



function  getCookie(pName){
    if(document.cookie.length == 0)
      return 'false';
    let regSepCookie = new RegExp('(; )', 'g');
    console.log(regSepCookie);
    let cookies = document.cookie.split(regSepCookie);
    console.log(cookies);
    for(let i = 0; i < cookies.length; i++){
        let regInfo = new RegExp('=', 'g');
        let infos = cookies[i].split(regInfo);
        console.log(infos);
      if(infos[0] == pName){
        return decodeURI(infos[1]);
      }
    }
    return 'false';
  }

  function oublier(pEvent)
  {
    console.log('JE PERDS LA MEMOIREE HAAAAAAAA.... je suis en pls');
    localStorage.clear();
    console.log(localStorage.getItem('darkModeActif'));
  }