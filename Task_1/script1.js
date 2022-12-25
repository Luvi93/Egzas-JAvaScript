class calculator{
  constructor(sum, subtraction, multiplication, division){
      this.sum = sum;
      this.substraction = substraction;
      this.multiplication = multiplication;
      this.division = division;
  }

  getSum(){
      return a + b;
  }
  // makeSum(){
  //     a+b
  //     console.log(sum);
  // }
  getSubtraction(){
      return a - b; 
  }
  // makeSubtraction(){
  //     a-b
  //     console.log(substraction);
  // }
  getMultipliucation(){
      return a * b;
  }
  // makeMultiplication(){
  //     a*b
  //     console.log(multiplication);
  // }
  getDivision(){
      return a / b;
  }
  // makeDivision(){
  //     a/b
  //     console.log(division);
  // }
}

//math
let calculatorObject = new calculator(getSum)
let calculatorObject1 = new calculator(getSubtraction)
let calculatorObject2 =  new calculator(getMultiplication)
let calculatorObject3 = new calculator(getDivision)

console.log(calculatorObject.sum)
console.log(calculatorObject.getSum)

console.log(calculatorObject1.subtraction)
console.log(calculatorObject1.getSubtraction)

console.log(calculatorObject2.multiplication)
console.log(calculatorObject2.getMultipliucation)

console.log(calculatorObject3.division)
console.log(calculatorObject3.getDivision)