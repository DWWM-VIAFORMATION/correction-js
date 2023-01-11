class Personne
{
    nom;
    prenom;
    constructor(pNom,pPrenom)
    {
        this.nom = pNom;
        this.prenom = pPrenom;
    }
    afficher()
    {
        console.log(`Prénom : ${this.prenom} | Nom : ${this.nom}`);
    }
}