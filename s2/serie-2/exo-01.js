//parcourir les nomnbres de 1 a 10
for(let i=1;i<=10;i++)
{
    // i%2 == 0 equivaut à la division entière de i par 2 a un reste égal à zero ----> i est pair
    if(i%2==0)
    {
        console.log(`le nombre ${i} est pair`);
    }
    else
       { 
        console.log(`le nombre ${i} est impair`);
       }
}

// while
let i =1;
while (i<=10)
{
    if(i%2==0)
    {
        console.log(`le nombre ${i} est pair`);
    }
    else
       { 
        console.log(`le nombre ${i} est impair`);
       }
       i++;
}
