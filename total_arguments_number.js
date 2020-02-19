// Create a function that returns the total number of parameters passed in.
// function numberArgs(args) {
//  let argumentsLength = arguments.length;
//  return argumentsLength;
// }

const numberArgs = (...args) => args.length;

console.log(numberArgs("a", "b", "c"));
console.log(numberArgs(1, 2, 3, 4));