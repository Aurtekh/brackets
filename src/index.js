module.exports = function check(str, bracketsConfig) {
    let arr1 = [];
    let arr2 = [];
    let x = 1;
    bracketsConfig.forEach((item) => {
      arr1 = String(str).split('').filter(char => char === item[0]);
      arr2 = String(str).split('').filter(char => char === item[1]);
      if (arr1.length !== arr2.length) {
        return x = 0;
      }
  });
    return x === 1;
  }
