//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count == 0) {
        return '0=0';
    } else if (count < 0) {
        return count + '<0';
    } else {
        var seq = Array.from(new Array(count + 1).keys());
        var sum = 0;
        return seq.reduce((x, y) => {
            x = x + '+' + y;
            sum += y;
            return x;
        }) + ' = ' + sum;
    };
  };

  return SequenceSum;

})();