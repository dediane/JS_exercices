function builtPyramide(num)
{
    for (var i = 1; i <= num; i++)
    {
        console.log((" ").repeat(num-i) + ("#").repeat(i));
    }
}    

var num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
builtPyramide(num);
