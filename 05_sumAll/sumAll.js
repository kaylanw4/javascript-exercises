const sumAll = function(bot, top) {
    if (typeof bot !== "number" || 
        typeof top !== "number" ||
        bot < 0 ||
        top < 0){
        return "ERROR"
    }   
    if (bot > top){
        let temp = top
        top = bot
        bot = temp
    }
    let num = 0
    for (i = bot; i <= top; i++){
        num += i
    }
    return num
};

// Do not edit below this line
module.exports = sumAll;
