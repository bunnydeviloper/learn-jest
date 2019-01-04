const isAnagram = require('./anagram');

beforeAll(() => initDB()); // scope to this file
afterAll(() => closeDB()); // scope to this file

const initDB = () => console.log('Database initialized...');
const closeDB = () => console.log('Database closed...');

const initEach = () => console.log('Init a test...');
const closeEach = () => console.log('One test done...');

describe('Checking anagram', () => {
  beforeEach(() => initEach());

  test('isAnagram function exists', () => {
    // expect(isAnagram).toBeDefined();
    expect(typeof isAnagram).toBe('function');
  });

  afterEach(() => closeEach());

  test('Elbow and below should be anagram', () => {
    expect(isAnagram('elbow', 'below')).toBe(true);
  });

  test('Cinema and iceman should be anagram', () => {
    expect(isAnagram('Cinema$@?', 'ice man')).toBeTruthy();
  });
});
