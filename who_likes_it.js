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

function whoLikesIt(names){

  // determine if array has values in it
    // if a value exists, is there on or more
      // if there is more than one do this
  let others = 0;
  let total_people = 0;
  let message = '';
  let names_length = names.length

  others = names_length - 2;
  total_people = names_length;
  // increment the count of others for names greater than 2 in the array

  // if no name is present in the array
  if(names_length <= 0 || undefined) {
    message = 'No one likes this.';
    return message;
  }
  // array contains one name
  else if(names_length === 1){
    // console.log(`${name} likes this`);
    message = names[0] + ` likes this.`;
    return message;
  }
  // array contains one name
  else if(names_length === 2){
    // console.log(`${name} like this`);
    message = names[0] + ' and ' + names[1] + ` like this.`; 
    return message;
  } 
  else if(names_length === 3){
    others = names_length - 2;
    // console.log(`${name} and ${others} others like this`);
    return names[0] + `, ` + names[1] + ` and ` + names[2] + ` like this.`;
  } 
  else if(names_length >= 4){
    others = names_length - 2;
    // console.log(`${name} and ${others} others like this`);
    return names[0] + `, ` + names[1] + ` and ` + others + ` others like this`;
  }
}

console.log(whoLikesIt(names1));
console.log(whoLikesIt(names2));
console.log(whoLikesIt(names3));
console.log(whoLikesIt(names4));
console.log(whoLikesIt(names5));

// Sample tests
describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(whoLikesIt([]), 'No one likes this');
    Test.assertEquals(whoLikesIt(['Peter']), 'Peter likes this.');
    Test.assertEquals(whoLikesIt(['Jacob', 'Alex']), 'Jacob and Alex like this.');
    Test.assertEquals(whoLikesIt(['Max', 'John', 'Mark']), 'Max, John and Mark like this.');
    Test.assertEquals(whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this.');
  });
});