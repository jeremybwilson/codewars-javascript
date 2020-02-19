// this function should return a number (final grade).  There are four types of final grades.
// 100, if a grade for the exam is more than 90 and if a number of completed projects is minimum 10
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2
// 0, in other cases

// const assert = require('assert');

function finalGrade(exam, projects){
  if(exam > 90 || projects > 10) {
    return 100;
  }
  
  if(exam > 75 && projects >= 5){
    return 90;
  }
  
  if(exam > 50 && projects >= 2) {
    return 75;
  }
  
  return 0;
}

console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(87, 6) === 90);
console.log(finalGrade(77, 7) === 90);
console.log(finalGrade(70, 5) === 75);

// console.log(assert(finalGrade(100, 12) === 100));
// console.log(assert(finalGrade(87, 6) === 90));