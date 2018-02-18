//https://www.codewars.com/kata/51f9d3db4095e07f130001ee

var compose = function (val, ...functions) {
  functions.forEach((f) => val = f(val));
  return val;
}