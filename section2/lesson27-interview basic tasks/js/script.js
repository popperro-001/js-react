"use strict";

// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
console.log(x++); //5, ++x=6

// •	Чему равно такое выражение: [ ] + false - null + true ?
console.log(typeof([] + false)); //empty array - [] is equal empty string - ''
console.log([] + false); //false
console.log([] + false - null); //NaN math operations with Not a Number
console.log([] + false - null + true); //NaN

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let z = y = 2;
console.log(z); //2 right to left 

// •	Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); //string "12", something + string = string (concat)

// •	Что выведет этот код: alert( "1"[0] )?
console.log("1" [0]); //we refer to the string "1" by index[0]
console.log("privet" [2]); //i

// •	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); //left to right working with &&, reacts to false, null == false, it returns first false on its way

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2) === (1 && 2)); //false: !! transforms next expression to Boolean type, so Boolean is not equal (1 && 2)

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(null || 2 && 3 || 4); //3: && has higher priority than || => null || 3(out of 2&&3) || 4, || reacts on true, then 3(out of null||3) || 4, again 3(out of 3||4)

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); //false

// •	Что выведет этот код: alert( +"Infinity" ); ?
console.log(+"Infinity"); //Infinity, type of Number because of unary +

// •	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко"); // review unicode table of the value of particular character

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); //2, because || reacts on true, from left to right the 1st true is 2