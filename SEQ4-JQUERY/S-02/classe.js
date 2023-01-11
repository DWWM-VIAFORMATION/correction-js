class Classe
{
    intitule;
    listeStagiaires;
    dateDebut;
    dateFin;
    constructor(pIntitule,pDateDebut,pDateFin)
    {
        this.intitule = pIntitule
        this.listeStagiaires = new Array()
        this.dateDebut =pDateDebut
        this.dateFin=pDateFin
    }
    ajouterStagiaire(pStagiaire)
    {
        this.listeStagiaires.push(pStagiaire)
    }
    afficher()
    {
        return `la formation ${this.intitule} commence le ${this.dateDebut} et fini le ${this.dateFin}`
    }
}