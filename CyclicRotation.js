//https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function CyclicRotation(A, K) {
  if (A.length == 0) return []
  for (let i = 0; i < K; i++){
    A.unshift(A.pop())
  }
  return A
}