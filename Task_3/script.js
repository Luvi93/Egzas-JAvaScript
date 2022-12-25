/* ------------------------------ TASK 3 ---------------------------------------------------
Sutvarkykite užduoties "Task 3" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
// import { composition } from "./modules/math/composition";



// let b = division(four, two);
// let c = substraction(three, two);
// let d = multiplication(five, two);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


import { add } from "./lib.js";
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { multiplication } from "./modules/math/multiplication.js";
import { substraction } from "./modules/math/subtraction.js";

const sum = composition(5,5);
console.log('Sum = ', sum);

const div = division(4,2);
console.log('div =', div);

const mult = multiplication(3,2);
console.log('mult =', mult);

const subst = substraction(5,2);
console.log('subst =', subst);

const result = add(4, 4);
console.log(`The result is: ${result}`);