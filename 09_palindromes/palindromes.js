const palindromes = function (str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() != str.charAt(i).toUpperCase() || (str.charAt(i) >= "0" && str.charAt(i) <= "9")) {
            newStr += str.charAt(i).toLowerCase();
        }
    }
    if (newStr.length % 2 === 0) {
        for (let i = 0; i < newStr.length / 2; i++) {
            if (newStr[i] !== newStr[newStr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    else {
        for (let i = 0; i < (newStr.length - 1) / 2; i++) {
            if (newStr[i] !== newStr[newStr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
