//https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

function solution(S, P, Q) {
  let len = S.length
  let countA = [0]
  let countC = [0]
  let countG = [0]
  let countT = [0]

  let lastA = 0
  let lastC = 0
  let lastG = 0
  let lastT = 0

  S.split('').forEach((x, i) => {
    countA[i + 1] = x === 'A' ? ++lastA : lastA
    countC[i + 1] = x === 'C' ? ++lastC : lastC
    countG[i + 1] = x === 'G' ? ++lastG : lastG
    countT[i + 1] = x === 'T' ? ++lastT : lastT
  })

  let p, q
  let A, C, G, T
  let result = []
  for (let i = 0; i < P.length; i++) {
    p = P[i]
    q = Q[i] + 1
    A = countA[q] - countA[p]
    C = countC[q] - countC[p]
    G = countG[q] - countG[p]
    T = countT[q] - countT[p]
    if (A) {
      result.push(1)
    } else if (C) {
      result.push(2)
    } else if (G) {
      result.push(3)
    } else {
      result.push(4)
    }
  }
  return result
}

console.log(solution('CAGCCTA', [0, 2, 5, 0,6], [0, 4, 5, 6,6]))