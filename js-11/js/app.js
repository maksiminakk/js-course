"use strict";

const num = '50';

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('More');

} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error');

switch (num) {
    case '49':
        console.log('No');
        break;
    case '100':
        console.log('No');
        break;
    case '50':
        console.log('Yes');
        break;
    default:
        console.log('Empty');
        break;
}