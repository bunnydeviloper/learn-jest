const isAnagram = require('./anagram');

beforeAll(() => initDB()); // scope to this file
afterAll(() => closeDB()); // scope to this file

// beforeEach(() => initDB());
// afterEach(() => closeDB());

const initDB = () => console.log('Database initialized...');
const closeDB = () => console.log('Database closed...');

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
