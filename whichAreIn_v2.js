// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
// order of the strings of a1 which are substrings of strings of a2.

  // declare the array r that needs to be sorted into lexicographical order and returned at the end
// #Example 1: 
let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns ["arp", "live", "strong"]

// #Example 2: 
let b1 = ["tarp", "mice", "bull"];
let b2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// returns []

function inArray2(array1, array2){
  let new_array = [];
  for(let i = 0; i < array1.length; i++){
      let substring = array1[i];
      for(let j = 0; j < array2.length; j++){
          if(array2[j].indexOf(substring) !== -1){
            new_array.push(array1[i]);
              break;
          }
      }
  }
  return new_array.sort();
}

console.log(inArray2(a1, a2));


// Sample Tests:
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])