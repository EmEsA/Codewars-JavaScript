//https://www.codewars.com/kata/595ddfe2fc339d8a7d000089

function hamsterMe(code, message) {
  //order letter in code and remove duplicates
  var codeLetters = Object.getOwnPropertyNames(code.split('').sort().reduce((obj, char) => {
      obj[char] = obj[char] ? obj[char]++ : 1;
      return obj
  }, {}));

  var firstLetter = codeLetters[0].charCodeAt() - 96; //alphabet position of the first letter of code
  var codeObj = {}; //initialize code object

  var currChar = firstLetter; //counter for all 26 letters
  for (let i = 0; i < codeLetters.length; i++) {
      let nextChar = i < codeLetters.length - 1 ? codeLetters[i + 1].charCodeAt() - 96: 26 + firstLetter;
          let j = 1; //internal counter for one letter of the code
          while (currChar < nextChar) {
              let modifier = currChar % 26 === 0 ? 1 : 0;
              codeObj[String.fromCharCode(currChar % (26 + modifier) + 96)] = codeLetters[i] + j + '';
              j++;
              currChar++;
          }
  }

  return message.split('').map(char => codeObj[char]).join('');
}