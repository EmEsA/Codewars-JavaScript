//https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A) {
    distinct = A.reduce((obj, x) => (obj[x] = true, obj), {})
    return Object.getOwnPropertyNames(distinct).length
}

A = [2,2,1,3,1,1]
console.log(solution(A))