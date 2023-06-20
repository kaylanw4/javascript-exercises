const fibonacci = function(a) {
    let n1 = 0, n2 = 1, nextTerm

    for(let i = 1; i <= a; i++){
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm
    }
    return a < 1 ? "OOPS" : n1
};

// Do not edit below this line
module.exports = fibonacci;
