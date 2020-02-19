// convert strings to how they would be typed by Jaden Smith
// capitalize the first letter of every word in the sentence

String.prototype.toJadenCase = function() {
  console.log(this);
  // a place to store the jadenCaseStr
  let jadenCase = '';
  // a place to store whether the next character we encounter 
    // should be capitalized
  // always capitalize the first letter of the string
  let capitalize = true;
  
  // iterate over each character in the string
  for(let index = 0; index < this.length; index++){
    const letter = this[index];
    // if the current letter is a space,
    if(letter === ' '){
      // next letter should be capitalized
      capitalize = true;
      jadenCase += ' ';

    } else {

      // append either the letter itself, or capitalize the letter itself
      if(capitalize){
        jadenCase += letter.toUpperCase();
        capitalize = false;
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }
  return jadenCase;
}

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
console.log(jadenStr);

  // split the string on spaces
    // capitalize the first letter of each word
    // join them all back together