const convertToCelsius = function(temp) {
  let num = 0;
  num = (temp - 32) * 5 / 9;
  num = Math.round(num * 10) / 10
  return num;
};

const convertToFahrenheit = function(temp) {
  let num = 0;
  num = temp * 9 / 5 + 32;
  num = Math.round(num * 10) / 10
  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
