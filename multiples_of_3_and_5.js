function solution(number){
  // define new Array
  let newArray = [];
  let sum = 0;
  
  // loop through passed in numbers 
  for(let i = 1; i < number; i++){
    // find numbers below the number passed in
    if((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)){
      // console.log(sum);
      // for the correct multiples, pass those values into the array
      // newArray.push(i);
      sum = sum + i;
    }
  }
  // return the array holding correct values (multiples of 3 and 5)
  // return newArray;
  // return the sum
  return sum;
}

const solutionMultipleValues = (number) => {
  let sum = 0;
  // loop through passed in numbers 
  for(let i = 1; i < number; i++){
    // find numbers below the number passed in
    if((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)){
      sum = sum + i;
    }
  }
  // return the sum
  return sum;
}

console.log(solution(100));
console.log(solutionMultipleValues(100));
// solution(1000);