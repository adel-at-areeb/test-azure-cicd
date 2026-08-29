const { add, isEven, greet } = require('../src/app');

test('add: adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('isEven: detects even numbers', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(7)).toBe(false);
});

test('greet: greets a name', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet: throws without a name', () => {
  expect(() => greet()).toThrow('name is required');
});
