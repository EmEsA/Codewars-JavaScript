//https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
  var leftPartArr = String(n).split('').map(Number);
  for (let i = leftPartArr.length - 1; i > 0; i--) {
      //check pairs to find the change position
      if (leftPartArr[i] > leftPartArr[i - 1]) {
          var rightPartArr = leftPartArr.splice(i);
          var min = Math.min(...rightPartArr.filter(val => val > leftPartArr[i - 1])); //smallest digit larger that the one we are splitting at
          leftPartArr.push(min); //add this min to the left part
          rightPartArr.push(leftPartArr.splice(i - 1, 1)[0]); //move the digit at which we split to the right part
          rightPartArr.splice(rightPartArr.indexOf(min), 1); //remove minimum from right part as it is already added to the left one
          rightPartArr.sort(); //smallest number from right part digits
          return rightPartArr.length !== 0 ? Number(leftPartArr.concat(rightPartArr).join('')) : Number(leftPartArr.reverse().join(''));
      }
  }
  return -1;
}