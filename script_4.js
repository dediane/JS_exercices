const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

function display(array)
{
    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("\nFiltre dans cette liste les entrepreneurs qui sont nés dans les années 70\n\n");
res = (entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980));
display(res)

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("\nSors une array qui contient le prénom et le nom des entrepreneurs\n\n")
names = (entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`))
display(names)

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("\nQuel âge aurait chaque inventeur aujourd'hui ?\n\n");
actual_year = 2020
birth_year = (entrepreneurs.map(entrepreneurs => entrepreneurs.year))
for (i = 0; i < birth_year.length; i++)
{
    console.log((names[i] + " aurait ") + (actual_year - birth_year[i]) + " ans.");
}

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("\nTrie les entrepreneurs par ordre alphabétique du nom de famille.\n\n");
entrepreneurs.sort(function (a , b) 
{
    return a.last.localeCompare(b.last)
})
  display(entrepreneurs);