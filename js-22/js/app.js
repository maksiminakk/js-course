"use strict";

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button')[1]; // получение второго эл-та

console.log(buttons[0]); // получение второго эл-та

const circles = document.getElementsByClassName('circle');

console.log(circles);

const items = document.querySelectorAll('.item');

items.forEach(item => {
    console.log(item);
});

const oneItem = document.querySelector('.item');
console.log();












