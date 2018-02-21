//https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
  let sum = 0
  let cumulated = []
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    cumulated.push(sum)
  }
  
  let min
  let temp
  for (let i = 0; i < cumulated.length-1; i++) {
    temp = Math.abs(cumulated[i] - (sum - cumulated[i]))
    if (min === undefined || temp < min) min = temp
  }
  return min
}