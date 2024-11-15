const reverseInt = require("./index.js");

test("Reverse int function exists", () => {
    expect(reverseInt).toBeDefined()
});

test("Reverse int hanles 0 as an input", () => {
    expect(reverseInt(0)).toEqual(0);
})

test("Reverse int flips a positive integer", () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
})

test("Reverse int flips a negative integer", () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
})