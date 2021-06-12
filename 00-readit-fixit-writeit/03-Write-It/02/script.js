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


const wrapWithTag = (content, tagname) => {
   return `<${tagname}>${content}</${tagname}>`;
};

const reverse = movies.reverse();
 
 const parseTitle = title => {
   const lowerTitle = title.toLowerCase();
   const wrapped = wrapWithTag(lowerTitle, `li`);
   document.write(wrapped);
 };
 
 document.write(`<ul>`);
 movies.forEach(movies => parseTitle(movies));
 document.write(`</ul>`);