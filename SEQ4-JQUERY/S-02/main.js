// let stagiaire1 = ['Martin','Dupont'];
// let stagiaire2 = ['Vincent','Martin'];
// let stagiaires = [stagiaire1,stagiaire2];
// console.log(stagiaires);
// console.log(stagiaires[1][1])

// let stagiaireA = new Stagiaire()
// stagiaireA.nom = "BRU"
// stagiaireA.prenom = 'Thierry';

// let stagiaireB = new Stagiaire()
// stagiaireB.nom = "TENAILLE"
// stagiaireB.prenom = 'Remi';
// let stagiairesBis = [stagiaireA,stagiaireB];
// console.log(stagiairesBis);
// console.log(stagiairesBis[1].prenom)

// stagiairesBis.forEach(stagiaire=>{
//     console.log(stagiaire.salutations());
// })
// let anotherStagiaire = new Stagiaire("Lucette","Anderson")
// console.log(anotherStagiaire);

// let classe = new Classe("dwwm 2023",new Date(),new Date());
// classe.ajouterStagiaire(stagiaireA);
// classe.ajouterStagiaire(stagiaireB);
// console.log(classe);
function creerStage(pEvent)
{
    pEvent.preventDefault();
    console.log('creerStage');
    stage = new Classe(document.querySelector('#txt_intitule').value,new Date(document.querySelector('#date_debut').value),new Date(document.querySelector('#date_fin').value))
    console.log(stage);
    let enTexte = JSON.stringify(stage);
    let enObjet = JSON.parse(enTexte)
    console.log('en texte:'+enTexte);
    console.log('en objet');
    console.log(enObjet);
}
function afficherStage(pEvent)
{
    pEvent.preventDefault();
    console.log(stage.afficher());

}
var stage;
let btn_creer = document.querySelector('#btn_creer')
btn_creer.addEventListener('click',creerStage)

let btn_log = document.querySelector('#btn_log')
btn_log.addEventListener('click',afficherStage)

//console.log(stage.afficher()); ne fonctionne pas parce que stage n'a pas été instantié et est UNDEFINED
console.log(stage);