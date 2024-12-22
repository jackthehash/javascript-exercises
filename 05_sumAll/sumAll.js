const sumAll = function(a, b) {
    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
    let sum = 0;
    let i = a;
    let j = b;
    if (j < i) {
        i = b;
        j = a;
    }
    
    while (i <= j) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
