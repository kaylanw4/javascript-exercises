const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
  return nums.reduce((total, current) => total + current, 0)
};

const multiply = function() {
  let total = 1
  for (const num of arguments) {
    total *= num
  }
  return total
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let factorial = a
	for (let i = a - 1; i > 0; i--){
    factorial *= i
  }
  return a === 0 || a === 1 ? 1 : factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
