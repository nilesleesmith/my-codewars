/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/
// turn the string into an array. uppercase each first letter. put them into a new array. turn the array into a string.
Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     let newString = [];
     for(word of this.split(' ')) {
       newString.push(word[0].toUpperCase() + word.slice(1));
     }
     return newString.join(' ');
   }
  }
);
