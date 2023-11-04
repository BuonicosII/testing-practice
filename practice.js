function capitalize (string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverse (string) {
    const array = string.split("");
    array.reverse();
    return array.join("")
}

const calculator = {

    add: function(num1, num2) {
        return num1 + num2
    },

    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2) {
        return num1 * num2
    },

    divide: function(num1, num2) {
        return num1 / num2 
    }
}

module.exports = {capitalize, reverse, calculator} ;