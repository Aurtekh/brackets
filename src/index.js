module.exports = function check(str, bracketsConfig) {
  let Openbrackets = [];
  let bracketsPairs = {};
  let stack = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
  Openbrackets.push(bracketsConfig[i][0]);
  bracketsPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
for (let i = 0; i < str.length; i++) {
  let curSymbol = str[i];
  let topElement = stack[stack.length - 1];
  if (bracketsPairs[curSymbol] === topElement && stack.length !== 0) {
    stack.pop();
  } else if (Openbrackets.includes(curSymbol)) {
    stack.push(curSymbol);
  } else {
    if (stack.length === 0) {
    return false;
    }
  }
}
  return stack.length === 0;
}