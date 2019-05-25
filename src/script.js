'use-strict';

function parenthesesAreBalanced() {
  str = document.getElementById('stringToTest').value;
  let stack = [];
  const OPEN_BRACKET = '(';
  const CLOSE_BRACKET = ')';
  let i;
  for (i = 0; i <= str.length; i++) {
    let char = str[i];
    if (OPEN_BRACKET === char) {
      stack.push(char);
    } else if (CLOSE_BRACKET === char) {
      if (stack[stack.length - 1] === OPEN_BRACKET) {
        stack.pop();
      } else {
        stack.push(char);
        break;
      }
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;
}
