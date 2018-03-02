//https://app.codility.com/programmers/lessons/6-sorting/triangle/

function solution(A) {
    A = A.sort((a, b) => a - b)
    A
    let i
    for (i = 0; i < A.length; i++) {
        if (A[i] >= 0) break
    }
    for (i = i; i < A.length - 2; i++) {
        A
        if (A[i] - A[i + 1] - A[i + 2] < 0 && A[i + 1] - A[i] - A[i + 2] < 0 && A[i + 2] - A[i] - A[i + 1] < 0) {
            return 1
        }
    }
    return 0
}

A = [10, 2, 5, 1, 8, 20]
console.log(solution(A))