const checkIfWednesday = require('./index');

test("responds to messages that have 'my dude' and 'wednesday' in them ", () => {
  const mockReply = jest.fn();
  const message = {
    author: { username: 'YaBoiBrooks' },
    content: 'my dude wednesday',
    reply: mockReply,
  };
  checkIfWednesday(message);
  expect(mockReply.mock.calls.length).toBe(1);
});
test('ignores messages from itself ', () => {
  const mockReply = jest.fn();
  const message = {
    author: { username: 'ItsWednesdayMyDudes' },
    content: 'my dude wednesday',
    reply: mockReply,
  };
  checkIfWednesday(message);
  expect(mockReply.mock.calls.length).toBe(0);
});

test("ignores messages that do not have 'my dude' and wednesday'", () => {
  const mockReply = jest.fn();
  const message = {
    author: { username: 'YaBoiBrooks' },
    content: 'my man wednesday',
    reply: mockReply,
  };
  checkIfWednesday(message);
  expect(mockReply.mock.calls.length).toBe(0);
});
