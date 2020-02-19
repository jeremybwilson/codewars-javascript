
// Ex. 2
function toWeirdCase2(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

// Ex. 3
function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase3(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}

console.log(toWeirdCase3(string1));
console.log(toWeirdCase3(string2));

// Ex. 4
function toWeirdCase4(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}

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