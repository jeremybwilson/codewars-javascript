/* Write a function called that takes a string of parentheses, 
*  and determines if the order of the parentheses is valid. 
*  The function should return true if the string is valid, 
*  and false if it's invalid. */

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

const validParentheses1 = (str) => {
  return !str.split('').reduce((upToPrevChar, thisChar) => {
    if(thisChar === '(' || thisChar === '{' || thisChar === '['){
      return ++upToPrevChar;
    } else if(thisChar === ')' || thisChar === '}' || thisChar === ']'){
      return --upToPrevChar;
    }
    return upToPrevChar
  }, 0);
}

const isParenthesisMatching = (parens) => {
  let stack = [];

  let open = {
      '{': '}',
      '[': ']',
      '(': ')'
  };

  let closed = {
      '}': true,
      ']': true,
      ')': true
  }

  for (let i = 0; i < parens.length; i++) {

      let char = parens[i];

      if (open[char]) {
          stack.push(char);
      } else if (closed[char]) {
          if (open[stack.pop()] !== char) return false;
      }
  }
  return stack.length === 0;
}

const validParentheses2 = (parens) => {
  let n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

const validParentheses3 = (parens) => {
  const tokenizer = /[()]/g; // ignores characters in between; parentheses are
  let count = 0,           // pretty useless if they're not grouping *something*
      token;
  while(token = tokenizer.exec(parens), token !== null){
     if(token == "(") {
        count++;
     } else if(token == ")") {
        count--;
        if(count < 0) {
           return false;
        }
     }
  }
  return count == 0;
}

console.log(validParentheses3("()"));
console.log(validParentheses3(")(()))"));
console.log(validParentheses3("("));
console.log(validParentheses3("(())((()())())"));