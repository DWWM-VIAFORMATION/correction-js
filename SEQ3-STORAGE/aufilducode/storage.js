console.log(localStorage.getItem("prenom"));
if ((localStorage.getItem("prenom") == "") || (localStorage.getItem("prenom") == null)) {
    let prenom = prompt("quel est votre prénom?")
    localStorage.setItem("prenom", prenom);
}
else {
    alert(localStorage.getItem("prenom"))
    localStorage.clear();
}
