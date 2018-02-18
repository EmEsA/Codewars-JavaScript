//https://www.codewars.com/kata/556b85b433fb5e899200003f

function mixedFraction(s){
  var dividend = parseInt(s.split("/")[0]);
  var divisor = parseInt(s.split("/")[1]);
  var reminder = dividend % divisor;
  var newDividend;
  var newDivisor;
  var integerPart = "";
  
  if (divisor == 0) {throw new Error("Division by 0")};
  if(reminder == 0){
      //only integer part
      return dividend / divisor + "";
  }else{
      //shorten reminder fraction
      for(var i = 1; i <= Math.abs(reminder); i++){
        if (reminder % i == 0 && divisor % i == 0){
          newDividend = Math.abs(reminder) / i;
          newDivisor = Math.abs(divisor) / i;
        }
      }
      return (Math.abs(dividend) < Math.abs(divisor)) ? dividend/Math.abs(dividend) * divisor/Math.abs(divisor) * newDividend + "/" +  newDivisor : (dividend - reminder) / divisor + " " + newDividend + "/" + newDivisor;
    }  
  }