//https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  return Array.from(new Array(n+1), (val, index) => index * index).
  join("").
  split("").
  map(x => parseInt(x)).
  reduce((x,y) => x = x + (y == d ? 1 : 0),0); 
}