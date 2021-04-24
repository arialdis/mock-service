// import modules
const service = require("../services/mock-service");

// mocks a response
module.exports.mockResponse = async (req, res, next) => {
  try {
    // log request
    console.log("Mock Request: ", {
      date: new Date().toISOString(),
      method: req.method,
      url: req.baseUrl + req.path,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      body: req.body
    });

    // get mock response from service
    const response = await service.mockResponse(req.params);

    // set response headers
    response.headers.forEach((header) => res.header(header.key, header.value));

    // set response cookies
    response.cookies.forEach((cookie) => {
      let options = {};
      const cookieOptions = ["maxAge", "domain", "path", "secure", "httpOnly", "sameSite"];

      cookieOptions.forEach((cookieOption) => {
        if (cookie[cookieOption]) options[cookieOption] = cookie[cookieOption];
      });

      res.cookie(cookie.name, cookie.value, options);
    });

    res.status(response.status).send(response.body);
  } catch (error) {
    next(error);
  }
};
