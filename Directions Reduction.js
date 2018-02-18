//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  var opposites = { NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST' };
  var isOpposite = function (a, b) { return opposites[a] === b ? true : false; }
  var i = 1;
  while (i < arr.length) {
      i === 0 && i++ ;
      isOpposite(arr[i], arr[i - 1]) ? arr.splice(i-- - 1, 2) : i++;
  }
  return arr;
}