const pingPong = require('./index');

test("responds to message 'ping'", () => {
  const mockReply = jest.fn();
  const message = { content: 'ping', reply: mockReply };
  pingPong(message);
  expect(mockReply.mock.calls.length).toBe(1);
});

test('does not respond to other messages', () => {
  const mockReply = jest.fn();
  const message = { content: 'Seen the new star wars?', reply: mockReply };
  pingPong(message);
  expect(mockReply.mock.calls.length).toBe(0);
});
