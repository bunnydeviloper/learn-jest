const functions = require('./functions');

test('Adds 2 and 3 to equal 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('Adds 2 and 3 to NOT equal 4', () => {
  expect(functions.add(2, 4)).not.toBe(4);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// for primitive types, use toBe, for object/array: use toEqual
test('User should be Sophie Sleepy object', () => {
  expect(functions.createUser()).toEqual({
    'firstName': 'Sophie',
    'lastName': 'Sleepy'
  });
});
