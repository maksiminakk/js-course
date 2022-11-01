"use strict";
//операторы
let incr = 10,
    decr = 10;

//постфиксная
incr++;
decr--;
//префиксная
++incr;
--decr;

console.log(incr);
console.log(decr);

//остаток от деления
console.log(5%2);

//сравнение 
console.log(2+4 === 6);

// оператор &&
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); //- если оба верны - будет true;

// оператор или ||
const isChecked1 = false,
      isClose1 = true;
      
console.log(isChecked1 || isClose1); //- если хотя бы одно верно - будет true;

//оператор отрицание !
const isChecked2 = false,
      isClose2 = true;
      
console.log(isChecked2 || !isClose2); //- ! - меняет значиние на противоположное


