//https://www.codewars.com/kata/58878393fc23972533001434

function isPrime(n) {
  return Array.from(Array(Math.floor(Math.abs(n) / 2)).keys()).reduce((x,y) => x + (Math.abs(n) % y == 0 ? 1 : 0),0) == 1 ? true : false;
};