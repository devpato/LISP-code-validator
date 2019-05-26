'use-strict';

function validLISPCode() {
  const str = document.getElementById('stringToTest').value;
  if (str !== null && str !== '' && str !== undefined) {
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
    document.getElementById('stringToTest').value = '';
    document.getElementById('res-value').innerHTML = stack.length === 0;
  } else {
    document.getElementById('stringToTest').value = '';
    document.getElementById('res-value').innerHTML = true;
  }
}
