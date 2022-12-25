/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;

Radau nuorodą: https://javascript.info/task/calculator-constructor
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    const answer = this.a + this.b;
    console.log(`Sum = ${answer}`);
  }
  substract() {
    const answer = this.a - this.b;
    console.log(`Substract = ${answer}`);
  }
  multipl() {
    const answer = this.a * this.b;
    console.log(`multipl = ${answer}`);
  }
  divide() {
    const answer = this.a / this.b;
    console.log(`divide = ${answer}`);
  }
}

const skaiciuotuvs = new Calculator(5,6);

skaiciuotuvs.sum();
skaiciuotuvs.substract();
skaiciuotuvs.multipl();
skaiciuotuvs.divide();




// function Calculator() {

// let a = 0;
// let b = 0;

//     this.read = function(a, b) {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
    
//     this.sub = function() {
//       return this.a - this.b;
//     };
    
//     this.div = function() {
//       return this.a / this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );
//   alert( "Sub=" + calculator.sub() );
//   alert( "Div=" + calculator.div() );