const functions = require('./functions');

test('Adds 2 and 3 to equal 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('Adds 2 and 3 to NOT equal 4', () => {
  expect(functions.add(2, 4)).not.toBe(4);
});
