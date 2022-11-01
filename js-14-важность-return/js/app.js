"use strict";

const usdCurr = 28;
const euroCurr = 32;
const rubCurr = 0.5;
const discount = 0.9;

function convert (amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}


promotion(convert(500, usdCurr));
convert(12, euroCurr);
convert(78, rubCurr);



















