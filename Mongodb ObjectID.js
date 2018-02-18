//https://www.codewars.com/kata/52fefe6cb0091856db00030e

var Mongo = {
  isValid(str) {
      return /^[a-f,\d]{24}$/.test(str) && typeof (str) == 'string';
  },
  getTimestamp(str) {
      return this.isValid(str) && new Date(parseInt(str.substring(0, 8), 16) * 1000);
  }
}