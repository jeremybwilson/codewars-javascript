// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
  let vowelsCount = 0;
  // Ex. 1
  vowel_count = (str.match(/[aeiou]/ig)||[]).length;

  // Ex. 2
  // const vowels = ['a', 'e', 'i', 'o', 'u'];
  // for(let i = 0; i < str.length; i++){
  //   for(let j = 0; j < vowels.length; j++){
  //     if(str[i] == vowels[j]){
  //       vowelsCount++;
  //     }
  //   }
  // }
  return vowelsCount;
}

function getVowelCount(str){
  // define a container variable to set the vowel count
  let vowelCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  // iterate over the string
  for(let index = 0; index < str.length; index++){
    // get the current letter
    let currentLetter = str[index];
    // find matches if the current letter is a, e, i, o, or u
    if(vowels[currentLetter]){
      // increment the counter
      vowelCount++;
    }
  }
  // return the vowel count
  return vowelCount;
}

let vowel_string = 'my pyx are super';
// let vowel_string = 'abbracaddabra';
// let vowel_string = 'ab cdefghijk lmno pqrstu vwxy zacdb fegihih ab d';
console.log(`the vowel count is:`, getVowelCount(vowel_string));