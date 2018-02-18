//https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  var sum = n.toString().split("").map(x => parseInt(x)).reduce((x,y) => x + y);
  return sum < 10 ? sum : digital_root(sum);
}