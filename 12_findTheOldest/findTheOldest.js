const findTheOldest = function(arr) {
    arr.sort((a,b) => {
        let aAge = 0;
        let bAge = 0;
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        if (!("yearOfDeath" in a)) {
            aAge = (new Date()).getFullYear() - a.yearOfBirth;
        }
        if (!("yearOfDeath" in b)) {
            bAge = (new Date()).getFullYear() - b.yearOfBirth;
        }
        return aAge < bAge ? 1 : -1;
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
