function factoriel(num)
{
    var f = 1;
    for(var i = 1; i <= num; i++)
    {
        f = f* i;
    }
    return(f);
}

var x = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(factoriel(x));


