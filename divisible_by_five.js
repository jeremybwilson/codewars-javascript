// Create a function that returns true if an integer is divisible by 5, 
// and false otherwise.
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

// function divisibleByFive(n) {
//   return n % 5 === 0;
// }

function divisibleByFive(n) {
  return !(" " + n / 5).includes(".");
}

console.log(divisibleByFive(15));