"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("../src/calculator");
test("add", () => {
    expect((0, calculator_1.add)(2, 3)).toBe(5);
});
test("subtract", () => {
    expect((0, calculator_1.subtract)(5, 3)).toBe(2);
});
test("multiply", () => {
    expect((0, calculator_1.multiply)(3, 4)).toBe(12);
});
test("divide", () => {
    expect((0, calculator_1.divide)(8, 2)).toBe(4);
});
test("divide by zero", () => {
    expect(() => (0, calculator_1.divide)(5, 0)).toThrow();
});
