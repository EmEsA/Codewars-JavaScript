//https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {
    return Math.floor(Math.floor(B/K) - Math.floor(A/K) + (A % K === 0 ? 1 : 0))
}

console.log(solution(6,11,2))