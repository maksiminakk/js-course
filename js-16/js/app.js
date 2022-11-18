"use strict";
// callback function
function first () {
    //do something
    setTimeout(function {
        console.log('1');
    }, 500); 
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`lalala ${lang}`);
    callback();
}

function done () {
    console.log('lalalal');
}

learnJS('JS', done);













