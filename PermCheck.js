//https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
  if (A.length === 0) return 0
  let occurences = []
  for (let i = 0; i < A.length; i++){
    o = occurences[A[i]]
    if (o) return 0 
    occurences[A[i]] = true
  }
  for (let i = 1; i < occurences.length; i++) {
    o = occurences[i]
    if (!o) return 0
  }
  return 1
}