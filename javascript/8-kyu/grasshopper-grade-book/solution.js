function getGrade (s1, s2, s3) {
// calculate the average of the three scores
const avg = (s1 + s2 + s3) / 3;

// determine the letter grade based on the average
if (avg >= 90) return 'A';
if (avg >= 80) return 'B';
if (avg >= 70) return 'C';
if (avg >= 60) return 'D';
// if none of the above conditions are met, the grade is F
return 'F';
}
