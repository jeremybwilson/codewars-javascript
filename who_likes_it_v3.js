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

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

console.log(likes(names1));
console.log(likes(names2));
console.log(likes(names3));
console.log(likes(names4));
console.log(likes(names5));