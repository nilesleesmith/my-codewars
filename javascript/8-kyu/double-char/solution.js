function doubleChar(str) {
  let dString = '';
  // Add each character twice to the new string.
  for (i = 0; i < str.length; i++) {
    dString = dString + str[i] + str[i];
  }
  return dString;
}