const Joi = require("joi");

// schema to validate the create header body
module.exports.mockParams = Joi.object({
  responseId: Joi.string().trim().required(),
  delay: Joi.number().integer().min(0).max(300000).required()
});
