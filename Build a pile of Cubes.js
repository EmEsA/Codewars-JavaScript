//https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  var count = 0
  while (m > 0) {
      count++;
      m -= Math.pow(count, 3);
  }
  return m == 0 ? count : -1;
}