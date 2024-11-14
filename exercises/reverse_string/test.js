const reverse = require("./index.js");

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
})

test('Reverse function reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
})

test('Reverse function reverses a string with spaces', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
})