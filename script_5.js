const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function display(array)
{
    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

  //Est-ce que tous les livres ont été au moins empruntés une fois ?
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  let flag = 0;
  books.forEach(book => book.rented === 0 && flag++);
  if(flag > 0)
  {
    console.log("Tous les livres n'ont pas été loués.")
  }
  else
  {
      console.log("Tous les livres ont été loués.")
  }

  //Quel est livre le plus emprunté ?
  console.log("\nQuel est livre le plus emprunté ?\n")
  books.sort(function(a, b){
    if(a.rented < b.rented) {return 1;}
    if(a.rented > b.rented) {return -1;}
    return 0;
  })
  console.log('Le livre le plus emprunté est ' + books[0].title + " emprunté " + books[0].rented + " fois");

  //Quel est le livre le moins emprunté ?
  console.log("\nQuel est le livre le moins emprunté ?\n")
  books.sort(function(a, b){
      if(a.rented < b.rented) {return -1;}
      if(a.rented > b.rented) {return 1;}
      return 0;
  })
  console.log('Le livre le moins emprunté est ' + books[0].title + " emprunté " + books[0].rented + " fois");

  //Trouve le livre avec l'ID: 873495
  console.log("\nTrouve le livre avec l'ID: 873495\n");
  console.log(books.find(book => book.id === 873495));

  //Supprime le livre avec l'ID: 133712
  console.log("\nSupprime le livre avec l'ID: 133712\n");
  console.log("Suppression de :")
  console.log(books.find(book => book.id == 133712));
for (let i in books) {
  if (books[i].id === 133712) {
    books.splice(i, 1);
  }
}

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
console.log("\nTrie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)\n\n");
books.sort(function (a , b) 
{
    return a.title.localeCompare(b.title)
})
  display(books);

