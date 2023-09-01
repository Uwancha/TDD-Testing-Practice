import { reverseString } from '../src/reverseString.js';

describe('reverse string', () => {
    test.skip ('reverse a single string', () => {
        const result = reverseString('word');
        expect(result).toBe('drow')
    });

    test.skip ('reverse a string removing leading and trailing whitespace', () => {
        const result = reverseString(' whitespace ')
        expect(result).toBe('ecapsetihw')
    });

    test.skip('reverse an empty string', () => {
        const result = reverseString('');
        expect(result).toBe('');
    });
    
    test.skip('reverse a string with special characters', () => {
        const result = reverseString('!@#$%^&*');
        expect(result).toBe('*&^%$#@!');
    });

    test.skip('reverse a string with multiple words', () => {
        const result = reverseString('Hello world');
        expect(result).toBe('dlrow olleH');
    });

    test.skip('reverse a string with numbers', () => {
        const result = reverseString('12345');
        expect(result).toBe('54321');
    });

    test.skip('reverse a string with Unicode characters', () => {
        const result = reverseString('😃🌍🔥');
        expect(result).toBe('🔥🌍😃');
    });

    test.skip('reverse a string with mixed case', () => {
        const result = reverseString('AbCdEfG');
        expect(result).toBe('GfEdCbA');
    });
})

