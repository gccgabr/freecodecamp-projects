function getAverage(scores) {
	let sum = 0;
	for (let i = 0; i < scores.length; i++) {
		sum += scores[i];
	}
	return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  let grade;
  if (score == 100) {
    grade = "A++";
  } else if (score < 100 && score >= 90) {
    grade = "A";
  } else if (score < 90 && score >= 80) {
    grade = "B";
  } else if (score < 80 && score >= 70) {
    grade = "C";
  } else if (score < 70 && score >= 60) {
    grade = "D";
  } else if (score < 60) {
    grade = "F";
  }
  return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
