// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
// order of the strings of a1 which are substrings of strings of a2.

// Notes:
// Arrays are written in "general" notation. 
// See "Your Test Cases" for examples in your language.
// Beware: r must be without duplicates.

// #Example 1: 
let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns ["arp", "live", "strong"]

// #Example 2: 
let b1 = ["tarp", "mice", "bull"];
let b2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns []

let inArray = function(array1, array2){
// declare the array r that needs to be sorted into lexicographical order and returned at the end
  let arr = [];
  for(let i = 0; i < array1.length; i++){
      let substr = array1[i];
      for(let j = 0; j < array2.length; j++){
          if(array2[j].indexOf(substr) !== -1){
              arr.push(array1[i]);
              break;
          }
      }
  }
  return arr.sort();
}

console.log(inArray(a1, a2));

// Sample Tests:
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])