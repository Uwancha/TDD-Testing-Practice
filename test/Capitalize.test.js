import { Capitalize } from '../src/Capitalize.js';

describe('Capitalize', () => {
    test.skip('capitalizes the first character of a word', () => {
        const result = Capitalize('word');
        expect(result).toBe('Word');
      });
      
      test.skip('capitalizes the first character of a sentence', () => {
        const result = Capitalize('this is a sentence.');
        expect(result).toBe('This is a sentence.');
      });

      test.skip('returns an empty string for empty input', () => {
        const result = Capitalize('');
        expect(result).toBe('');
      });

      test.skip('capitalizes a single character string', () => {
        const result = Capitalize('a');
        expect(result).toBe('A');
      });

      test.skip('does not change an already capitalized string', () => {
        const result = Capitalize('Word');
        expect(result).toBe('Word');
      });

      test.skip('remove leading and trailing whitespace', () => {
        const result = Capitalize('  whitespace ');
        expect(result).toBe('Whitespace');
      });
})