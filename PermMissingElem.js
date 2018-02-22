//https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
  let n = A.length + 1
  if (n === 1) return 1
  let targetSum = n * (n + 1) / 2
  let sum = A.reduce((sum, x) => sum + x)
  return targetSum - sum
}