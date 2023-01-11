class Maison {
    numero_rue;
    type_voie;
    nom_voie;
    code_postal;
    ville;

    constructor (p_numero_rue="", p_type_voie="",p_nom_voie="",p_code_postal="",p_ville=""){
        this.numero_rue = p_numero_rue;
        this.type_voie = p_type_voie;
        this.nom_voie = p_nom_voie;
        this.code_postal = p_code_postal;
        this.ville = p_ville;
    }

    afficher(){
        return `Le logement se situe ${this.numero_rue} ${this.type_voie} ${this.nom_voie} ${this.code_postal} ${this.ville}`
    }

}