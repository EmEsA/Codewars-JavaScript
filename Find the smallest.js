//https://www.codewars.com/kata/573992c724fc289553000e95

function smallest(n) {
  let arr = n.toString().split('').map(x => x * 1); //array of digits from n
  //gather all the options
  result = []
  for (let i = 0; i < arr.length; i++) {
      let numbers = arr.slice(0); //clone arr
      let digit = numbers.splice(i, 1)[0]; //take a digit out
      let tempResult = [];
      for (let j = 0; j <= numbers.length; j++) {
          numbers.splice(j, 0, digit) //insert digit at index j
          result.push(
              {
                  number: Number(numbers.join('')),
                  from: i,
                  to: j
              });
          numbers.splice(j, 1) //remove digit for next insertion
      }
  }
  //sort by smallest number, from and to
  result.sort((a, b) => {
      if (a.number !== b.number) {
          return a.number - b.number;
      } else if (a.from !== b.from) {
          return a.from - b.from;
      } else {
          return a.to - b.to;
      }
  });

  return [result[0].number, result[0].from, result[0].to];
}