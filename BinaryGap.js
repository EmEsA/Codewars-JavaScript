//https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function maxBinaryGap(N) {
  let max = 0
  let rightmostSetPos = 0
  //skip the first iteration because the gap has to be surrounded by 1 at both sides
  rightmostSetPos = Math.log2(N & - N)
  N = N >>> rightmostSetPos + 1
  while (N > 0) {
    rightmostSetPos = Math.log2(N & - N)
    if (rightmostSetPos > max) max = rightmostSetPos
    N = N >>> rightmostSetPos + 1
  }
  return max
}