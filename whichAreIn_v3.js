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


// Other kata solutions by best practices
// Solution #1
function inArray(arr1, arr2) {
  debugger;
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

console.log(inArray(a1, a2));

// Solution #2
function inArray2(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

// console.log(inArray2(b1, b2));

// Sample Tests:
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])