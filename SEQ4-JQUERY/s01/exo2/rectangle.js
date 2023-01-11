class Rectangle
{
    longueur;
    largeur;
    /**
     * Permet de créer un objet de la classe avec comme info sa longeur et sa largeur
     * @param {*} pLongueur longueur en centimetre
     * @param {*} pLargueur largeur en centimetre
     */
    constructor(pLongueur,pLargueur)
    {
        this.largeur=parseInt(pLargueur);
        this.longueur=parseInt(pLongueur);
        
    }
    calculerSurface()
    {
return this.largeur*this.longueur;
    }
    calculerPerimetre()
    {
        return (this.longueur+this.largeur)*2
    }
}