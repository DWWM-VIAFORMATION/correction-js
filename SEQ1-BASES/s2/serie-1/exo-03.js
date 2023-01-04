let message ="";
// afficher les nombres de 2 a 20 mais uniquement les pair, séparés par un tiret
for(let i = 2; i<=20; i++)
{
    if(i%2==0)
     message+=i+'-';
}
console.log(message);
message ="";
for(let i = 2; i<=20; i=i+2)
{
    message+=i+'-';
}
console.log(message);