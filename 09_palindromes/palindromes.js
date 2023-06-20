const palindromes = function (string) {
    let newStr = string.match(/[^_\W]+/g).join('').toLowerCase();
    let palindrome = newStr.split('').reverse().join("")
    return newStr === palindrome ? true : false
};

// Do not edit below this line
module.exports = palindromes;
