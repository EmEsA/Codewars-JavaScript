//https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
    let max = 0
    let lastMax = 0
    let counters = Array(N).fill(0)
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            if (counters[A[i] - 1] >= lastMax) {
                counters[A[i] - 1]++
            } else {
                counters[A[i] - 1] = lastMax + 1
            }
            if (counters[A[i] - 1] > max) max = counters[A[i] - 1]
        } else {
            lastMax = max
        }
    }
    counters.forEach((x, i) => {
        if (x < lastMax) counters[i] = lastMax
    })
    return counters
}