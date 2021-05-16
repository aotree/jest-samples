const forEach = require('./for-each');
const mockCallback = jest.fn(x => 100 + x);

forEach([0, 5, 10], mockCallback);

test('forEach()', () => {
  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[1][0]).toBe(10); // This line will fail.
  expect(mockCallback.mock.results[1].value).toBe(110); // This line will not be tested because the line above will fail.
});
