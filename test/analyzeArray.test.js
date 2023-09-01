import { analyzeArray } from '../src/analyzeArray.js';

describe('analyze array', () => {
    test("analyze average of the array values", () => {
        const analyze = analyzeArray([1,8,3,4,2,6]);
        const avrg = analyze.average;
        expect(avrg).toBe(4)
    });

    test('analyze minimum of the array values', () => {
        const analyze = analyzeArray([1,8,3,4,2,6]);
        const min = analyze.minimum;
        expect(min).toBe(1)
    });

    test('analyze maximum of the array values', () => {
        const analyze = analyzeArray([1,8,3,4,2,6]);
        const max = analyze.maximum;
        expect(max).toBe(8)
    });

    test('analyze length of the array', () => {
        const analyze = analyzeArray([1,8,3,4,2,6]);
        const len = analyze.length;
        expect(len).toBe(6)
    });
})