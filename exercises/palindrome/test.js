const isPalindrome = require('./index.js');

test('isPalindrome function exists', () => {
    expect(typeof isPalindrome).toEqual("function");
})

test("'aba' is a palindrome", () => {
    expect(isPalindrome('aba')).toBeTruthy();
})

test("'  aba' is not a palindrome", () => {
    expect(isPalindrome('  aba')).toBeFalsy();
})

test("'greeting' is not a palindrome", () => {
    expect(isPalindrome('greeting')).toBeFalsy();
})

test("'1001' is a palindrome", () => {
    expect(isPalindrome('1001')).toBeTruthy();
})

test("'Fish hsif' is not a palindrome", () => {
    expect(isPalindrome('Fish hsif')).toBeFalsy();
})

test("'pennep' is a palindrome", () => {
    expect(isPalindrome('pennep')).toBeTruthy();
})