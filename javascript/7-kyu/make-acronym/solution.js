function toAcronym(inp){
  // Split the words into an array.
  let words = inp.split(' ');
  let acronym = ''
  
  // For each word return the first letter as an upper case
  words.forEach(function(word) {
    acronym = acronym + word[0].toUpperCase()
  });
  return acronym;
}
