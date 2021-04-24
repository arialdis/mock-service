// import modules
const express = require("express");
const controller = require("../controllers/mock-controller");
const validator = require("../middleware/validator");
const schemas = require("../middleware/mock-validation-schemas");

// create express router
const router = express.Router();

// set up routes
router.all(
  "/:responseId/delay/:delay",
  validator.validateIds(["responseId"]),
  validator.validateParams(schemas.mockParams),
  controller.mockResponse
);

// export router
module.exports = router;
