const reverseStr = require('./reverseStr');

test('reverseStr function exists', () => {
  expect(reverseStr).toBeDefined();
});

test('String reverses', () => {
  expect(reverseStr('hello')).toBe('olleh');
});

test('String reverses with upper case', () => {
  expect(reverseStr('Hello')).toBe('olleh');
});
