const winston = require('winston');
const log = require('./index');

describe('log', () => {
  beforeEach(() => {
    winston.createLogger = { log: jest.fn() };
  });

  it('calls logger.log with params', () => {
    const mockMessage = 'EVERYTHING IS BREAKING!';
    log({ message: mockMessage });
  });
  it('adds discord msg info if availible');
});
