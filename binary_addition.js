function binaryAdd(a, b){
  const sum = a + b;
  
  return toBinary(sum);
}

function toBinary(sum){
  if (sum === 0) {
    return '0';
  }
  
  let binary = '';
  while (sum > 0){
    const remainder = sum % 2;
    binary = remainder + binary;
    sum = Math.floor(sum / 2);
  }
  // return binary value
  return binary;
}

console.log(binaryAdd(1, 0));
console.log(binaryAdd(11, 0));
console.log(binaryAdd(12, 0));
console.log(binaryAdd(23, 0));