let lesmois = [retournerTableauMois('fr'),retournerTableauMois('en'),retournerTableauMois('es')];
// console.log(lesmois);
// console.log(lesmois[0]);
// console.log(lesmois[1]);
// console.log(lesmois[2]);
// console.log(lesmois[0][0]);
for(let i = 0; i<lesmois[0].length;i++)
{
    console.log("fr:"+lesmois[0][i]+" | en:"+lesmois[1][i]+" | es:"+lesmois[2][i]);
}