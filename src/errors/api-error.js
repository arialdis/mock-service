class APIError extends Error {
  /**
   * creates an APIError object
   * @param {Number} status - an http status code
   * @param {Array.<String>} list - a list of error messages
   */
  constructor(status, list) {
    super();
    this.status = status;
    this.list = list;
    this.date = new Date().toISOString();
  }
}

// export class
module.exports = APIError;
