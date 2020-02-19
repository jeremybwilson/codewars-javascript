var fatFingersV1 = function(str){
  debugger;
  // a place to store the fat fingered string
  let fatFingered = '';
  // a place to store whether or not the current letter should be capitalized;
  let capsLock = false;  // initialized to false
  // iterate over the string
  for(let index = 0; index < str.length; index++){
    const letter = str[index];
    
    if (letter == 'a' || letter == 'A'){  // if the current letter is an a
      capsLock = !capsLock;
    } else {  // else append the current letter
      // append capitalized based on our boolean
      if(capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
  }
  // return the fatFingered string
  return fatFingered;
};



var fatFingersV2 = function(str){
  // a place to store whether or not the current letter should be capitalized;
  let capsLock = false;  // initialized to false
  // iterate over the string
  return  str.split('').reduce((fatFingered, letter) => {
    if (letter == 'a' || letter == 'A'){  // if the current letter is an a
      capsLock = !capsLock;
    } else {  // else append the current letter
      // append capitalized based on our boolean
      if(capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
    // return the fatFingered string
    return fatFingered;
  }, '');

};

console.log(fatFingersV1("The quick brown fox jumps over the lazy dog.") ==  "The quick brown fox jumps over the lZY DOG.");
console.log(fatFingersV1("aAaaaaAaaaAAaAa") == "")
let result = fatFingersV1("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.");
console.log(result);
let answer = "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.";
console.log(answer);
console.log(result == answer);