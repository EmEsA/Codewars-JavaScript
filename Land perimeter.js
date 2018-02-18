//https://www.codewars.com/kata/5839c48f0cf94640a20001d3

function landPerimeter(arr) {
  land = arr.reduce((prev, cur) => (prev.push(cur.split('')), prev),[]) //reduce arr to array of arrays of chars
    
  let perimeter = 0
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
    if (land [i][j] === 'X')
      //for each X increase the perimeter by 4 minus 2 for each other X below or to the right  
      perimeter += 4 - ((land[i+1] && land[i+1][j] === 'X') * 2 || 0) - ((land[i][j+1] === 'X') * 2 || 0)
    }
  }
    
  return 'Total land perimeter: ' + perimeter
}