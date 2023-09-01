import { calculator } from '../src/calculator.js';

describe('calculator', () => {
    test.skip('add two numbers', () => {
        const compute = calculator();
        const result = compute.add(1, 2);
        expect(result).toBe(3);
    });

    test.skip('return invalid if number is not passed', () => {
        const compute = calculator();
        const result = compute.add("a", "b");
        expect(result).toBe('Invalid input.');
    });

    test.skip('subtract two numbers', () => {
        const compute = calculator();
        const result = compute.subtract(2, 1);
        expect(result).toBe(1);
    });

    test.skip('return invalid if number is not passed', () => {
        const compute = calculator();
        const result = compute.subtract("a", "b");
        expect(result).toBe('Invalid input.');
    });

    test.skip('divide a number by a second number', () => {
        const compute = calculator();
        const result = compute.divide(2, 1);
        expect(result).toBe(2);
    });

    test.skip('return undefined if divider is 0', () => {
        const compute = calculator();
        const result = compute.divide(2, 0);
        expect(result).toBe('Division by zero is not allowed.');
    });

    test.skip('return invalid if number is not passed', () => {
        const compute = calculator();
        const result = compute.divide("a", "b");
        expect(result).toBe('Invalid input.');
    });

    test.skip('multiply two numbers', () => {
        const compute = calculator();
        const result = compute.multiply(2, 2);
        expect(result).toBe(4);
    });

    test.skip('return invalid if number is not passed', () => {
        const compute = calculator();
        const result = compute.multiply("a", "b");
        expect(result).toBe('Invalid input.');
    });
})
