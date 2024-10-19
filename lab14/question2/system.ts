// Create two TypeScript modules: 
// one for a Calculator 4 methods add, subtract, multiply, and divide,
// and another for using this Calculator methods to perform a calculation.
// Note: Ensure your code is well typed and formatted

export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}


const calculator = new Calculator();

const a: number = 50;
const b: number = 100;

console.log(`Add: ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Subtract: ${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`Multiply: ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`Divide: ${a} / ${b} = ${calculator.divide(a, b)}`);