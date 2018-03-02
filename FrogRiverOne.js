//https://app.codility.com/demo/results/trainingW64S2H-5VV/

function solution(X, A) {
    let sum = X * (X + 1) / 2
    let positions = []
    for (let i = 0; i < A.length; i++) {
        if (!positions[A[i]]) {
            positions[A[i]] = true
            sum -= A[i]
            if (sum === 0) return i
        }
    }
    return -1
}