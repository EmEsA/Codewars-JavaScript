//https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function solution(A) {
    let count0 = 0
    let result = 0
    A.forEach(x => {
        if (x === 0) {
            count0++
        } else {
            result += count0
        }
    })
    return result <= 1000000000 ? result : -1
}

console.log(solution([0, 1, 0, 0, 1, 1]))