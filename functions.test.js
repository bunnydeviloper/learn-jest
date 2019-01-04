const functions = require('./functions');

test('Adds 2 and 3 to equal 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});
