const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  // expect(isAnagram).toBeDefined();
  expect(typeof isAnagram).toBe('function');
});

test('Elbow and below should be anagram', () => {
  expect(isAnagram('elbow', 'below')).toBe(true);
});

test('Cinema and iceman should be anagram', () => {
  expect(isAnagram('Cinema$@?', 'ice man')).toBeTruthy();
});
