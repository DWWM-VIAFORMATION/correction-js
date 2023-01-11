class Animal {

    prenom;
    espece;

    constructor(pPrenom, pEspece) {

        this.prenom = pPrenom;
        this.espece = pEspece;

    }
    afficher()
    {
        console.log(`L'animal s'appelle ${this.prenom} et de l'espèce ${this.espece}`);
    }

}