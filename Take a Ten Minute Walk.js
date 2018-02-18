//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  var dirs = walk.reduce((x, y) => (x[y] = x[y] + 1 || 1, x), {});
  return dirs.n == dirs.s && dirs.w == dirs.e && walk.length == 10 ? true : false;
}