// Given a year, return the century it is in


function centuryFromYear(year){
  // define empty variable for century
  // Example 1 - one liner
  // return year % 100 > 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
  
  // Example 2 - simple if statement
  const century = Math.floor(year / 100);
  const decade = year % 100;
  
  if (decade > 0){
    return century + 1;
  }
  return century;
  
  // Example 3 - too many if statements
  // determine century from input/year
  // if(year >= 2000 && year <= 2100){
  //   century = 20;
  // }
  // if(year >= 1900 && year <= 2000){
  //   century = 19;
  // }
  // if(year >= 1800 && year <= 1900){
  //   century = 18;
  // }
  // if(year >= 1700 && year <= 1800){
  //   century = 17;
  // }
  // return century;
}
console.log(centuryFromYear(2019));  // returns (20)
console.log(centuryFromYear(2012));  // returns (20)
console.log(centuryFromYear(1975));  // returns (19)
console.log(centuryFromYear(1776));  // returns (18)

