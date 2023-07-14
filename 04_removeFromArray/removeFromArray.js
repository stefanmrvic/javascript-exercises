const removeFromArray = function(array, args) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        let containsitem = false;
        
        for (let j = 1; j < arguments.length; j++) {
            
            if (array[i] === arguments[j]) {
                containsitem = true;
                break;
            }
        }

        if (!containsitem) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
