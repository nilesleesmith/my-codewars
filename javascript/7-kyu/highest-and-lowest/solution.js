function highAndLow(numbers) {
  const numberArray = numbers.split(" ").map(Number);
  let highest = numberArray[0];
  let lowest = numberArray[0];
  
  // check for highest and lowest numbers
  for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > highest) {
      highest = numberArray[i];
    }
    if (numberArray[i] < lowest) {
      lowest = numberArray[i];
    }
  }

  return `${highest} ${lowest}`;
}
