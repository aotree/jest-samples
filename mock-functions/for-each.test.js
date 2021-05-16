const forEach = require('./for-each');
const mockCallback = jest.fn(x => 100 + x); // `jest.fn(implementation)` is an abbreviation for `jest.fn().mockImplementation(implementation)`

forEach([0, 5, 10], mockCallback);

test('forEach()', () => {
  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[1][0]).toBe(5);
  expect(mockCallback.mock.results[1].value).toBe(105);
});
