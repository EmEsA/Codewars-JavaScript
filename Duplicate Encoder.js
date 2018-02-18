//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  word = word.toUpperCase();
  var oCount = word.split("").reduce((x, y) => (x[y] = x[y] ? ")" : "(", x),{});
  var arrSpl = word.split("");
  var strResult = "";
  for (var i = 0; i < arrSpl.length; i++) {
    strResult = strResult + oCount[arrSpl[i]];
  }
  return strResult;
}