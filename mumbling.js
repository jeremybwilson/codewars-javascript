// 7 kyu
function accum(input){
  // a place to store the result
  let result = '';
  
  // iterate over the string
  input.split('').forEach((currentLetter, index) => {
    const totalCount = index + 1;
    
    for(let counter = 0; counter < totalCount; counter++){
      // capitalize the first letter appended
      if(counter == 0){
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }
    // append a dash if it is not the last letter
    if(index != input.length - 1){
      result += '-';
    }
  });

  // return the result
  return result;


  // for(let index = 0; index < input.length; index++){
  //   const currentLetter = input[index];
    
  //   // append the current letter i+1 times to the string
  //   const totalCount = index + 1;
    
  //   for(let counter = 0; counter < totalCount; counter++){
  //     // capitalize the first letter appended
  //     if(counter == 0){
  //       result += currentLetter.toUpperCase();
  //     } else {
  //       result += currentLetter.toLowerCase();
  //     }
  //   }
  //   // append a dash if it is not the last letter
  //   if(index != input.length - 1){
  //     result += '-';
  //   }
  // }
  // // return the result
  // return result;
}

console.log(accum("abcd"));  // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty"));  // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));  //
console.log(accum("lmnoP"));  //
