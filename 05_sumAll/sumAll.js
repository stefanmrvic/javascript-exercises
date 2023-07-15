const sumAll = function(min, max) {
    if (typeof min !== "number" || typeof max !== "number" ) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    const sortedArgs = Array.from(arguments).sort();
    let sum = 0;
    for (let i = sortedArgs[0]; i <= sortedArgs[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
