//https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function solution(A) {
    A = A.sort((a,b) => a-b)
    let m1 = A[0]*A[1]*A[A.length-1]
    let m2 = A[A.length-1] * A[A.length-2] * A[A.length-3]
    return Math.max(m1,m2)
}

A= [-3,1,2,-2]
console.log(solution(A))