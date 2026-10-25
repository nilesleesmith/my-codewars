function solution(string) {
  // add a space before an uppercase
  return string.replace(/([A-Z])/g, " $1");
}
