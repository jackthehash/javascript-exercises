const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let ans = 0;
	for (let item of arr) {
    ans += item;
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
	for (let item of arr) {
    ans *= item;
  }
  return ans;
};

const power = function(a,b) {
	let ans = 1;
	for (let i = 0; i < b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  } return a * factorial(a - 1);
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
