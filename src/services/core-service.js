// import modules
const Response = require("../models/response-model");
const APIError = require("../errors/api-error");

// creates a mock response
module.exports.createResponse = async (body) => {
  const response = new Response(body);
  return await response.save();
};

// fetches all mock responses
module.exports.getResponses = async () => {
  return await Response.find();
};

// fetches a mock response by id
module.exports.getResponseById = async ({ responseId }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  return response;
};

// updates a mock response
module.exports.updateResponse = async ({ responseId }, body) => {
  const response = await Response.findByIdAndUpdate(responseId, body, { new: true });

  if (!response) throw new APIError(404, ["Response not found"]);

  return response;
};

// deletes a mock response
module.exports.deleteResponse = async ({ responseId }) => {
  const response = await Response.findByIdAndDelete(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  return response;
};

// creates a header
module.exports.createHeader = async ({ responseId }, body) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const header = response.headers.create(body);
  response.headers.push(header);

  await response.save();
  return header;
};

// fetches all headers
module.exports.getHeaders = async ({ responseId }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  return response.headers;
};

// updates a header
module.exports.updateHeader = async ({ responseId, headerId }, body) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const header = response.headers.id(headerId);

  if (!header) throw new APIError(404, ["Header not found"]);

  header.set(body);
  await response.save();
  return header;
};

// deletes a header
module.exports.deleteHeader = async ({ responseId, headerId }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const header = response.headers.id(headerId);

  if (!header) throw new APIError(404, ["Header not found"]);

  header.remove();
  await response.save();
  return header;
};

// creates a cookie
module.exports.createCookie = async ({ responseId }, body) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const cookie = response.cookies.create(body);
  response.cookies.push(cookie);

  await response.save();
  return cookie;
};

// fetches all cookies
module.exports.getCookies = async ({ responseId }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  return response.cookies;
};

// updates a cookie
module.exports.updateCookie = async ({ responseId, cookieId }, body) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const cookie = response.cookies.id(cookieId);

  if (!cookie) throw new APIError(404, ["Cookie not found"]);

  cookie.set(body);
  await response.save();
  return cookie;
};

// deletes a cookie
module.exports.deleteCookie = async ({ responseId, cookieId }) => {
  const response = await Response.findById(responseId);

  if (!response) throw new APIError(404, ["Response not found"]);

  const cookie = response.cookies.id(cookieId);

  if (!cookie) throw new APIError(404, ["Cookie not found"]);

  cookie.remove();
  await response.save();
  return cookie;
};
