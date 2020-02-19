function XO1(str) {
  let xCount = 0;
  let oCount = 0;
  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('0', 'i');
  
  for(let index = 0; index < str.length; index++){
    const letter = str[index];
    if(letter.match(xRegexp)) {
      xCount++;
    } else if (letter.match(oRegexp)) {
      oCount++;
    }
  }
  return xCount == oCount;
}

function XO2(str) {

  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('0', 'i');
  
  return str.split('').reduce(({xCount, oCount}, letter, index) => {
    if(letter.match(xRegexp)) {
      xCount++;
    } else if (letter.match(oRegexp)) {
      oCount++;
    }
    if(index < str.length - 1){
      return { xCount, oCount };
    } else {
      return xCount == oCount;
    }
  }, { xCount: 0, oCount: 0 });
}

const result = XO2('xxOOXx');

const result1 = XO2('xo');
const result2 = XO2("xxOo");
const result3 = XO2("xxxm");
const result4 = XO2("Oo");
const result5 = XO2("ooom");

console.log(result1 == true);
console.log(result2 == true);
console.log(result3 == false);
console.log(result4 == false);
console.log(result5 == false);

