"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello world');
    }
};

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; // устаревшая

// Object.setPrototypeOf(jonh, soldier); // новая

const jonh = Object.create(soldier); // уже имеет все свойства soldier














