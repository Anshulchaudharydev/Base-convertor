const RESULT = document.getElementById("outputBox");
const TO = document.getElementById('toBase');
let from = document.getElementById('fromBase');
let number = document.getElementById("numberInput");


function isBinary(number) {
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
        if (strNumber[i] !== '0' && strNumber[i] !== '1') {
            return false;
        }
    }
    return true;
}

function isOctal(number) {
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
        if (strNumber[i] < '0' || strNumber[i] > '7') {
            return false;
        }
    }
    return true;
}

function isDecimal(number) {
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
        if (strNumber[i] < '0' || strNumber[i] > '9') {
            return false;
        }
    }
    return true;
}
function isHexa(number) {
    let strNumber = number.toString();
    for (let i = 0; i < strNumber.length; i++) {
        let char = strNumber[i];
        if (!((char >= '0' && char <= '9') ||
            !(char >= 'A' && char <= 'F') ||
            !(char >= 'a' && char <= 'f'))) {
            return false;
        }
    }
    return true;
}

function binaryToDecimal(num) {
    var result = 0;
    for (let i = 0; i < num.length; i++) {
        result += parseInt(num[i] * Math.pow(2, ((num.length) - i) - 1));
    }
    return result;
}


function octalToDecimal(num) {
    var result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i] * Math.pow(8, ((num.length) - i) - 1);
    }
    return result;
}
function hexaToDecimal(num) {
    const decimal = parseInt(num, 16);
    if (!isNaN(decimal)) {
        return decimal;
    } else {
        return "Invalid input.";
    }
}


function decimalToBinary(num) {
    var result = " ";
    while (num >= 1) {
        let temp = num % 2
        result = temp.toString() + result;
        num = Math.floor(num / 2);
    }
    return result;
}

function decimalToOctal(num) {
    var result = "";
    while (num >= 1) {
        let temp = num % 8;
        result = temp.toString() + result;
        num = Math.floor(num / 8)
    }
    return result;
}
function decimalToHexa(num) {
    var result = "";
    while (num >= 1) {
        let temp = num % 16;
        if (temp == 10) {
            temp = "A";
        } else if (temp == 11) {
            temp = "B";
        }
        else if (temp == 12) {
            temp = "C";
        }
        else if (temp == 13) {
            temp = "D";
        }
        else if (temp == 14) {
            temp = "E";
        }
        else if (temp == 15) {
            temp = "F";
        }
        result = temp + result;
        num = Math.floor(num / 16)
    }
    return result;
}


function isValid() {
    let isValid = false;

    if (from.value == 2) {
        isValid = isBinary(number.value);
    } else if (from.value == 8) {
        isValid = isOctal(number.value);
    } else if (from.value == 10) {
        isValid = isDecimal(number.value);
    }
    else if (from.value == 16) {
        isValid = isHexa(number);
        console.log(isValid);
        
    }
    return isValid;
}

function convert() {
    let num = number.value;
    if (isValid()) {
        if (from.value == "2" && TO.value == "10") {
            RESULT.value = binaryToDecimal(num);
        }
        else if (from.value == "10" && TO.value == "2") {
            RESULT.value = decimalToBinary(num);
        }
        else if (from.value == "10" && TO.value == "8") {
            RESULT.value = decimalToOctal(num);
        }
        else if (from.value == "10" && TO.value == "16") {
            RESULT.value = decimalToHexa(num);
        }
        else if (from.value == "2" && TO.value == "8") {
            RESULT.value = decimalToOctal(binaryToDecimal(num));
        }
        else if (from.value == "2" && TO.value == "16") {
            RESULT.value = decimalToHexa(binaryToDecimal(num))
        }
        else if (from.value == "8" && TO.value == "10") {
            RESULT.value = octalToDecimal(num);
        }
        else if (from.value == "8" && TO.value == "2") {
            RESULT.value = decimalToBinary(octalToDecimal(num));
        }
        else if (from.value == "8" && TO.value == "16") {
            RESULT.value = decimalToHexa(octalToDecimal(num));
        }
        else if (from.value == "16" && TO.value == "10") {
            RESULT.value = hexaToDecimal(num);
        }
        else if (from.value == "16" && TO.value == "2") {
            RESULT.value = decimalToBinary(hexaToDecimal(num));
        }
        else if (from.value == "16" && TO.value == "8") {
            RESULT.value = decimalToOctal(hexaToDecimal(num));
        }
    } else {
        RESULT.value = "Error! enter valid input";
        RESULT.style.color = "orangered";
    }
}
