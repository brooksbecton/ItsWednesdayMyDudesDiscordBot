class Middleware {
  constructor() {
    this.middleware = [];
  }

  /**
   * Adds a new middleware function to the middleware that will run
   * @param {Function} newMiddleware - function that takes a Discord message Object
   */
  add(newMiddleware) {
    this.middleware.push(newMiddleware);
  }

  /**
   * Runs all the middleware that has been added
   * @param {Object} message - discord.js message obj
   */
  run(message) {
    this.middleware.forEach((middleware) => {
      middleware(message);
    });
  }
}

module.exports = Middleware;
