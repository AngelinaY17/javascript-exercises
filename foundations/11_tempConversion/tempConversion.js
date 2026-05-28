const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit-32)/(9/5);
  return Math.round(celsius * 10) / 10; 
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius*(9/5))+32; 
  return Math.round(fahrenheit * 10) / 10; 
};


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
