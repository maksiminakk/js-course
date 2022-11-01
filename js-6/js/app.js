"use strict";

const arr = [1,2,3];
const obj = {
    a: 1,
    b: 2, 
    c: 3
};

function getObjEl (el) {
    el.addEventListener("click", function(e) {
        console.log('Yes!');
    });
}
 
const button = document.querySelector('.button');
getObjEl(button);