module.exports = function getZerosCount(number) {
  // your implementation
  var result = 0;
  while (number >= 5)
  {
    number = Math.floor(number / 5);
    result += number;
  }
  return result;
}
