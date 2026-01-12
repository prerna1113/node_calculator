import { add, subtract, multiply, divide } from "../src/calculator";

test("add", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide", () => {
  expect(divide(8, 2)).toBe(4);
});

test("divide by zero", () => {
  expect(() => divide(5, 0)).toThrow();
});
