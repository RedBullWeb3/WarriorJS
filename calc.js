class Calculator {
  constructor(k, f) {
    if (isNaN(k) || isNaN(f)) {
      throw new Error("Given value is not a number!");
    } else if (k === "" || f === "") {
      throw new Error("Given value is empty!");
    }

    this.k = Number(k);
    this.f = Number(f);
  }

    add = () => this.k + this.f;

    substract = () => this.k - this.f

    multiply = () => this.k * this.f;

    divide = () => {
      if (this.f === 0) throw new Error("You cannot divide by 0!");
      return this.k / this.f;
    }
}

function values() {
  const k = prompt("Enter first number:");
  const f = prompt("Enter second number");

  try {
    const calc = new Calculator(k, f);
    console.log(`Add = ${calc.add()}`);
    console.log(`Substract = ${calc.substract()}`);
    console.log(`Multiply = ${calc.multiply()}`);
    console.log(`Divide = ${calc.divide()}`);
  } catch (error) {
    alert(error.message);
  }
}
values();
