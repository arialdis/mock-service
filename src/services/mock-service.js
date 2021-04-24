// import modules
const Response = require("../models/response-model");
const APIError = require("../errors/api-error");

// mocks a response
module.exports.mockResponse = async ({ responseId, delay }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  return new Promise((resolve) => setTimeout(() => resolve(response), delay));
};
