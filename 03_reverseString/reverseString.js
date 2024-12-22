const reverseString = function(str) {
    let reverse = "";
    let length = str.length;
    for (let i = 0;i < length;i++) {
        reverse += str.charAt(length - 1 - i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
