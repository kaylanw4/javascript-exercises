const reverseString = function(string) {
    const array = string.split("")
    const newArray = array.reverse()
    const reversedStr = newArray.join("")
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
