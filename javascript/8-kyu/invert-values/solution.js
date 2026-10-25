function invert(array) {
  // make the possive negative. make all other numbers absolute. push to new array.
  const newArray = [];
  for(num of array) {
    num > 0 ? newArray.push(-num) : newArray.push(Math.abs(num))
   }
   return newArray;
}
