// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each word upper cased, 
// and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){

  let strLength;
  let words, word, character, characters;
  strLength = string.length;  // number of chars in the overall string
  words = string.split(' ');      // split the string into words => array
  console.log(strLength);
  console.log(words);
  
  for(let i = 0; i < words.length; i++){  // loops through the words array
    word = words[i];
    characters = word.split('');

    for(let j = 0; j < characters.length; j++){  // loops throught the characters

      if(j % 2 === 0){  // determine if the character index is an odd value
        // if it is, set the character to uppercase
        result = characters[j].toUpperCase();
      } else {
        // otherwise, leave the character alone
        result = characters[j];
      }
      characters[j] = result;
      word = characters.join('');
    }
    words[i] = word;
  }
  return words.join(' ');
}

let string1 = 'String';
let string2 = 'Weird string case';

console.log(toWeirdCase(string1));
console.log(toWeirdCase(string2));

// Sample tests
// describe('toWeirdCase', function(){
//   it('should return the correct value for a single word', function(){
//     Test.assertEquals(toWeirdCase('This'), 'ThIs');
//     Test.assertEquals(toWeirdCase('is'), 'Is');
//   });
//   it('should return the correct value for multiple words', function(){
//     Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
//   });
// });