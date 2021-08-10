import { expect, test } from '@jest/globals';
import manipulateString from './index';
import calculator from './calculator';
import caesar from './caesarCipher';
import arrayAnalysis from './ArrayAnalysis';
// String tests
test('capitalizes the string given', () => {
    expect(manipulateString.capitalize('string')).toBe('String');
});

test('reverses any string given', () => {
    expect(manipulateString.reverse('string')).toBe('gnirts');
});
// Calculator tests
test('adds two numbers together', () => {
    expect(calculator.add(5, 4)).toBe(9);
});

test('subtracts to numbers', () => {
    expect(calculator.sub(1, 1)).toBe(0);
});

test('divides two numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});
test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});
// Caesar Cipher tests
test('string changes according to shift', () => {
    expect(caesar.cipher('string!', 1)).toBe('tusjoh!');
});
test('if letter is shifted past z, it will wrap around to start of alphabet', () => {
    expect(caesar.cipher('zoo', 1)).toBe('app');
});
test('return letters the same case as they began', () => {
    expect(caesar.cipher('Abc!', 1)).toBe('Bcd!');
});
// array analysis
test('returns an object from an array', () => {
    expect(arrayAnalysis.receive([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
