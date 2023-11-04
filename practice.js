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

function caesarCipher (string) {
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const cipheredArray = []

    for (const char of string.split("")) {
        if (/^[^a-zA-Z]+$/.test(char)) {
            cipheredArray.push(char);
        } else if (char === char.toUpperCase()) {
            let index = alphabetArray.indexOf(char.toLowerCase());
            let cipheredChar = alphabetArray[index + 1];
            cipheredArray.push(cipheredChar.toUpperCase());
        } else {
            let index = alphabetArray.indexOf(char);
            let cipheredChar = alphabetArray[index + 1];
            cipheredArray.push(cipheredChar);
        }
    }

    return cipheredArray.join("")
}

function analyzeArray(array) {

    return {
        average: array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length,
        min: array.reduce((currentMin, currentValue) => Math.min(currentMin, currentValue)),
        max: array.reduce((currentMax, currentValue) => Math.max(currentMax, currentValue)),
        length: array.length

    }
}

module.exports = {capitalize, reverse, calculator, caesarCipher, analyzeArray} ;