function oddOrEven(array) {
  let numSum = 0;

  // Sum the array
  for (let i = 0; i < array.length; i++) {
    numSum += array[i];
  }
  
  // Check if the sum is even, if not then it's odd.
  return numSum % 2 === 0 ? "even" : "odd";
}