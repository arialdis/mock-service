// import modules
const mongoose = require("mongoose");
const APIError = require("../errors/api-error");

// validates the request body against the given schema
module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    // validate request body
    let { error } = schema.validate(req.body, { abortEarly: false });

    // check if request contains errors
    if (error) {
      const list = error.details.map((value) => value.message);
      error = new APIError(400, list);
    }

    return next(error);
  };
};

// validates the ids are valid mongodb types
module.exports.validateIds = (ids) => {
  return (req, res, next) => {
    let errors = [];

    // validate request ids
    ids.forEach((id) => {
      const idValue = req.params[id];
      if (!mongoose.Types.ObjectId.isValid(idValue)) errors.push(`${idValue} is not a valid object id`);
    });

    // check if request contains errors
    const error = errors.length > 0 ? new APIError(400, errors) : null;

    return next(error);
  };
};

// validates the request params against the given schema
module.exports.validateParams = (schema) => {
  return (req, res, next) => {
    // validate request params against schema
    let { error } = schema.validate(req.params, { abortEarly: false });

    // check if request contains errors
    if (error) {
      const list = error.details.map((value) => value.message);
      error = new APIError(400, list);
    }

    return next(error);
  };
};
