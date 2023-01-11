class Cercle
{
    rayon;
    constructor(pRayon)
    {
        this.rayon =parseInt(pRayon);
    }
    calculerPerimetre()
    {
        return Math.PI*2*this.rayon;
    }
    calculerSurface()
    {
        return Math.PI*this.rayon**2;
    }
}   