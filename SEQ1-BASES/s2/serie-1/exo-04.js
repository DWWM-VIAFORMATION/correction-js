// afficher les puissances de 2 de 0 a 16
// faire varier  exposant de 0 a 16
// pour chaque exposant afficher la valeur de 2^exposant
for(let exposant = 0 ; exposant <=16; exposant++)
    {console.log(`2^${exposant} = ${2**exposant}`);}

for(let exposant = 0 ; exposant <=16; exposant++)
    {console.log(`2^${exposant} = ${Math.pow(2,exposant)}`);}