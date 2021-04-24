const Joi = require("joi");

// schema to validate the create response body
module.exports.createResponseBody = Joi.object({
  status: Joi.number().integer().min(100).max(599).required(),
  body: Joi.any(),
  headers: Joi.array().items(
    Joi.object({
      key: Joi.string().trim().required(),
      value: Joi.string().trim().required()
    })
  ),
  cookies: Joi.array().items(
    Joi.object({
      name: Joi.string().trim().required(),
      value: Joi.string().trim().required(),
      maxAge: Joi.number().integer(),
      domain: Joi.string().trim(),
      path: Joi.string().trim(),
      secure: Joi.boolean(),
      httpOnly: Joi.boolean(),
      sameSite: Joi.string().trim().valid("Strict", "Lax", "None")
    })
  )
});

// schema to validate the update response body
module.exports.updateResponseBody = Joi.object({
  status: Joi.number().integer().min(100).max(599),
  body: Joi.any(),
  headers: Joi.array().items(
    Joi.object({
      key: Joi.string().trim().required(),
      value: Joi.string().trim().required()
    })
  ),
  cookies: Joi.array().items(
    Joi.object({
      name: Joi.string().trim().required(),
      value: Joi.string().trim().required(),
      maxAge: Joi.number().integer(),
      domain: Joi.string().trim(),
      path: Joi.string().trim(),
      secure: Joi.boolean(),
      httpOnly: Joi.boolean(),
      sameSite: Joi.string().trim().valid("Strict", "Lax", "None")
    })
  )
});

// schema to validate the create header body
module.exports.createHeaderBody = Joi.object({
  key: Joi.string().trim().required(),
  value: Joi.string().trim().required()
});

// schema to validate the update header body
module.exports.updateHeaderBody = Joi.object({
  key: Joi.string().trim(),
  value: Joi.string().trim()
});

// schema to validate the create cookie body
module.exports.createCookieBody = Joi.object({
  name: Joi.string().trim().required(),
  value: Joi.string().trim().required(),
  maxAge: Joi.number().integer(),
  domain: Joi.string().trim(),
  path: Joi.string().trim(),
  secure: Joi.boolean(),
  httpOnly: Joi.boolean(),
  sameSite: Joi.string().trim().valid("Strict", "Lax", "None")
});

// schema to validate the update cookie body
module.exports.updateCookieBody = Joi.object({
  name: Joi.string().trim(),
  value: Joi.string().trim(),
  maxAge: Joi.number().integer(),
  domain: Joi.string().trim(),
  path: Joi.string().trim(),
  secure: Joi.boolean(),
  httpOnly: Joi.boolean(),
  sameSite: Joi.string().trim().valid("Strict", "Lax", "None")
});
