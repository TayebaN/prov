// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  //Din kod här

  return words.filter(function (word) {
    return word.toLowerCase().includes("a");
  });
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

// function filter(names, index, letter) {
//   var filteredNames = names.filter(function(word) {
//     return word.charAt(index) === letter;
//   });
//   return filteredNames;...
