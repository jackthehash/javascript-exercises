const fibonacci = function(num) {
    let n = parseInt(num)
    let a = 1;
    let b = 1;
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    for (let i = 0; i < n - 2; i++) {
        if (i % 2 === 0) {
            a += b;
        } else {
            b += a;
        }
    }
    if (a > b) {
        return a;
    } else return b;
    
};

// Do not edit below this line
module.exports = fibonacci;
