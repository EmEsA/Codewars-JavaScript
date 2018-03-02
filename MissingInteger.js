//https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {
    let arr = []
    arr = A.reduce((prev, curr) => (prev[curr] = true, prev), [])
    for (let i = 1; i < arr.length; i++) {
        if(!arr[i]) return i
    }
}

console.log(solution([1,9,3,13,2]))