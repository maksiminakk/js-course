"use strict";

const arr = [1,2,3,6,8];

arr.pop(); // - delete last element on array
arr.push(10); // - add element in array

// for (let i = 0; i < arr.length; i++) {
//     const element = array[i];
// } // - default cycle

// for (const value of arr) {
//     console.log(value);
// } // - massivve cycle

// console.log(arr.length);

// arr[99] = 0;

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort(compareNum);
console.log(products.join('; '));

function compareNum(a, b) {
    return a - b;
}












