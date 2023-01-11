class Stagiaire
{
    // liste des attributs
    prenom;
    nom;
    //constructeur
    constructor(pPrenom,pNom)
    {
        this.prenom = pPrenom
        if (pNom)
            this.nom = pNom.toUpperCase()
    }
    // liste des methodes
    salutations()
    {
        return `je m'appelerions ${this.prenom} ${this.nom}`
    }

}