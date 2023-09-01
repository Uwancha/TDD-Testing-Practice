import { caesarCipher } from '../src/caesarCipher.js';

describe('caesarCipher', () => {
    test.skip('should encrypt a string by shifting characters', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('ABC', 1)).toBe('BCD');
        expect(caesarCipher('xyz', 5)).toBe('cde');
    });
    
    test.skip('should decrypt an encrypted string by shifting characters in reverse', () => {
        expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
        expect(caesarCipher('BCD', -1)).toBe('ABC');
        expect(caesarCipher('cde', -5)).toBe('xyz');
    });
    
    test.skip('should handle edge cases and special characters', () => {
        expect(caesarCipher('', 5)).toBe('');
        expect(caesarCipher('123', 2)).toBe('123');
        expect(caesarCipher('!@#', 10)).toBe('!@#');
        expect(caesarCipher('AaZz', 1)).toBe('BbAa');
    });
})
