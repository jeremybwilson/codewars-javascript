// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, 
// containing the names of people who like an item. 
// It must return the display text as shown in the examples:

const names1 = [] // must be "no one likes this"
const names2 = ["Peter"] // must be "Peter likes this"
const names3 = ["Jacob", "Alex"] // must be "Jacob and Alex like this"
const names4 = ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
const names5 = ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function whoLikesIt(names) {
  // TODO
  let len = names.length;
  let others = 0;
  // console.log(len);
  
  if (len === 0) {
    return 'no one likes this';
  } else if (len === 1) {
    return names[0] + ' likes this';
  } else if (len === 2){
    return names[0] + ' and ' + names[1] + ' like this';
  } else if (len === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else if (len > 3){
    others = len - 2;
    return names[0] + `, ` + names[1] + ` and ${others}`, `others like this`;
  }
}

console.log(whoLikesIt(names1));
console.log(whoLikesIt(names2));
console.log(whoLikesIt(names3));
console.log(whoLikesIt(names4));
console.log(whoLikesIt(names5));