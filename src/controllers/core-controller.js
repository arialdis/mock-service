// import modules
const service = require("../services/core-service");

// creates a mock response
module.exports.createResponse = async (req, res, next) => {
  try {
    const response = await service.createResponse(req.body);

    res.status(201).send({ response: response.toObject() });
  } catch (error) {
    next(error);
  }
};

// fetches all mock responses
module.exports.getResponses = async (req, res, next) => {
  try {
    const responses = await service.getResponses();

    res.status(200).send({ responses: responses.map((response) => response.toObject()) });
  } catch (error) {
    next(error);
  }
};

// fetches a mock response by id
module.exports.getResponseById = async (req, res, next) => {
  try {
    const response = await service.getResponseById(req.params);

    res.status(200).send({ response: response.toObject() });
  } catch (error) {
    next(error);
  }
};

// updates a mock response
module.exports.updateResponse = async (req, res, next) => {
  try {
    const response = await service.updateResponse(req.params, req.body);

    res.status(200).send({ response: response.toObject() });
  } catch (error) {
    next(error);
  }
};

// deletes a mock response
module.exports.deleteResponse = async (req, res, next) => {
  try {
    const response = await service.deleteResponse(req.params);

    res.status(200).send({ response: response.toObject() });
  } catch (error) {
    next(error);
  }
};

// creates a header
module.exports.createHeader = async (req, res, next) => {
  try {
    const header = await service.createHeader(req.params, req.body);

    res.status(201).send({ header: header.toObject() });
  } catch (error) {
    next(error);
  }
};

// fetches all headers
module.exports.getHeaders = async (req, res, next) => {
  try {
    const headers = await service.getHeaders(req.params);

    res.status(200).send({ headers: headers.map((header) => header.toObject()) });
  } catch (error) {
    next(error);
  }
};

// updates a header
module.exports.updateHeader = async (req, res, next) => {
  try {
    const header = await service.updateHeader(req.params, req.body);

    res.status(200).send({ header: header.toObject() });
  } catch (error) {
    next(error);
  }
};

// deletes a header
module.exports.deleteHeader = async (req, res, next) => {
  try {
    const header = await service.deleteHeader(req.params);

    res.status(200).send({ header: header.toObject() });
  } catch (error) {
    next(error);
  }
};

// creates a cookie
module.exports.createCookie = async (req, res, next) => {
  try {
    const cookie = await service.createCookie(req.params, req.body);

    res.status(201).send({ cookie: cookie.toObject() });
  } catch (error) {
    next(error);
  }
};

// fetches all cookies
module.exports.getCookies = async (req, res, next) => {
  try {
    const cookies = await service.getCookies(req.params);

    res.status(200).send({ cookies: cookies.map((cookie) => cookie.toObject()) });
  } catch (error) {
    next(error);
  }
};

// updates a cookie
module.exports.updateCookie = async (req, res, next) => {
  try {
    const cookie = await service.updateCookie(req.params, req.body);

    res.status(200).send({ cookie: cookie.toObject() });
  } catch (error) {
    next(error);
  }
};

// deletes a cookie
module.exports.deleteCookie = async (req, res, next) => {
  try {
    const cookie = await service.deleteCookie(req.params);

    res.status(200).send({ cookie: cookie.toObject() });
  } catch (error) {
    next(error);
  }
};
