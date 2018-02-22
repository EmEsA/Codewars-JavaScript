//Check if one element from array A can be swapped with one lement from array B in a way that would make the sums of all numbers in both equal

function solution(A, B) {
  let sumA = A.reduce((sum, x) => sum + x)
  let sumB = B.reduce((sum, x) => sum + x)
  let diff = sumA - sumB

  if (diff % 2 !== 0) {
    return false
  } else {
    let biggerArr
    let smallerArr
    if (sumA > sumB) {
      biggerArr = A
      smallerArr = B
    } else {
      biggerArr = B
      smallerArr = A
    }
    occurencesInSmaller = []
    smallerArr.forEach(element => occurences[element] = true)
    let diffHalf = diff / 2
    for (let i = 0; i < biggerArr.length; i++) {
      let element = biggerArr[i]
      element
      if (element >= diffHalf && smallerArr[element - diffHalf]) return true
    }
    return false
  }
}