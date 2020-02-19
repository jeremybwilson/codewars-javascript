// Create a function that takes an array and returns the 
// difference between the smallest and biggest numbers.

// differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

// differenceMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.

// function differenceMaxMin(array){
//   let min = Math.min(...array);  // set empty variable to store min value
//   let max = Math.max(...array);  // set empty variable to store max value
//   let difference = '';
//   difference = max - min;
//   return difference;
// }

function differenceMaxMin(arr) {
	let maxNumberVal = Math.max(...arr);
	let minNumberVal = Math.min(...arr);
	return maxNumberVal - minNumberVal;
}

function differenceMaxMin(arr){
  return Math.max(...arr) - Math.min(...arr)
}

console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));  //  ➞ 82
// Smallest number is -50, biggest is 32.
console.log(differenceMaxMin([44, 32, 86, 19]));  // ➞ 67
// Smallest number is 19, biggest is 86.