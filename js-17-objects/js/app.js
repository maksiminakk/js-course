"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }

};

options.makeTest(); 

const {border, bg} = options.colors;

// console.log(options.name);

// delete options.name;

// for (const key in options) {
//     if (Object.hasOwnProperty.call(options, key)) {
//         const element = options[key];
//         console.log(element);
//     }
// }

// let counter = 0;

// for (const key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
        
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// console.log(Object.keys(options).length);















