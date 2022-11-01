"use strict";

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Yes');
// } 

// console.log((hamburger && fries));


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(1 && 0); // = 0
// console.log(1 && 5); // = 5
// console.log(null && 5); // = null
// console.log(0 && 'dsfsdfsdf'); // = 0

// if (hamburger === 3 && fries && cola === 1) {
//     console.log('Yes');
// } 
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while(num > 55);

// for (let i = 0; i < 10; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
        
//     }
// }

// let result = '';
// const length = 7;
// for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
        
//     }
//     result += '\n';
    
    
// }
// console.log(result);


// firstCycle: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue firstCycle; // or break
//             console.log(`Last level: ${k}`);
            
//         }
//     }
// }

let num = 20;
function showFirstMessage(text, arg, num, lala) {
    console.log(text);
    lala = num;
    console.log(num); 
}

showFirstMessage('Hello world');

function showFirstMessage(text) {
    console.log(text);
    num = 50;
}

showFirstMessage('Hello world');
console.log(num);

// function calc (a, b) {
//     return(a + b);
//     console.log('dewawrar');
// }

// console.log(calc(1, 90));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {return a + b;} 


























