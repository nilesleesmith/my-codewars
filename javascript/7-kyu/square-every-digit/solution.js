function squareDigits(num) {
  // create an array out of the number
  const numArray = num.toString().split('');
  const newNum = [];

  // square each number in the array
  for (let i = 0; i < numArray.length; i++) {
    newNum.push(Number(numArray[i]) ** 2);
  }

  // turn the array back to a number
  return Number(newNum.join(''));
}
