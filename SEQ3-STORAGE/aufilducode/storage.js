console.log(sessionStorage.getItem("prenom"));
if ((sessionStorage.getItem("prenom") == "") || (sessionStorage.getItem("prenom") == null)) {
    let prenom = prompt("quel est votre prénom?")
    sessionStorage.setItem("prenom", prenom);
}
else {
    alert(sessionStorage .getItem("prenom"))
    sessionStorage.clear();
}
