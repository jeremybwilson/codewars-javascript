// es6 version
const programmers = (arr) => {
  let minNumber = 0;
  let maxNumber = 0;
  // iterate through the array
  // for(let i = 0; i < arr.length; i++){
  // }
  minNumber = Math.min(...arr);
  maxNumber = Math.max(...arr);
    // find the difference between min and max, return the result
  console.log(minNumber, maxNumber)
  return maxNumber - minNumber;
}
programmers(147, 33, 526);


