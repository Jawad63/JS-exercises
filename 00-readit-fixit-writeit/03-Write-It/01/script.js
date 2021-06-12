const movies = [
   "Avant-Première: De Elfkins: een klein bakfestijn",
   "Avant-Première: Freaky",
   "Cruella",
   "Demon Slayer the Movie: Mugen Train",
   "K3 : Dans van de Farao",
   "Love Sarah",
   "Nomadland",
   "Raya And The Last Dragon NV",
   "Songbird",
   "Sons of Philadelphia",
   "The Conjuring 3: The Devil Made Me Do It",
   "Tom & Jerry NV",
   "Voyagers",
   "WolfWalkers NV",
];

document.write(`<ul>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ul>`);
