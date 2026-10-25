var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  // check the human years and return cat and dog years
  for (let year = 1; year <= humanYears; year++) {
    if (year === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (year === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}
