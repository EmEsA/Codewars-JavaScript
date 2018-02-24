//https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

function solution(A) {
  let min
  let minPos = 0
  let l = A.length
  for (let i = 0; i < l - 2; i++) {
    //2 elements
    avg = (A[i] + A[i + 1]) / 2
    if (min === undefined || avg < min) {
      min = avg
      minPos = i
    }
    //3 elements
    avg = (A[i] + A[i + 1] + A[i + 2]) / 3
    if (avg < min) {
      min = avg
      minPos = i
    }
  }
  //last 2 elements
  avg = (A[l - 2] + A[l - 1]) / 2
  if (avg < min) {
    min = avg
    minPos = l - 2
  }
  return minPos
}

console.log(solution([-6, 5, -5, 1, 2, -5, -7, 2, 68, -20, 1]))