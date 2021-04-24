// import modules
const express = require("express");
const controller = require("../controllers/core-controller");
const validator = require("../middleware/validator");
const schemas = require("../middleware/response-validation-schemas");

// create express router
const router = express.Router();

// set up response routes
router.post("/responses", validator.validateBody(schemas.createResponseBody), controller.createResponse);
router.get("/responses", controller.getResponses);
router.get("/responses/:responseId", validator.validateIds(["responseId"]), controller.getResponseById);
router.put(
  "/responses/:responseId",
  validator.validateIds(["responseId"]),
  validator.validateBody(schemas.updateResponseBody),
  controller.updateResponse
);
router.delete("/responses/:responseId", validator.validateIds(["responseId"]), controller.deleteResponse);

// set up header routes
router.post(
  "/responses/:responseId/headers",
  validator.validateIds(["responseId"]),
  validator.validateBody(schemas.createHeaderBody),
  controller.createHeader
);
router.get("/responses/:responseId/headers", validator.validateIds(["responseId"]), controller.getHeaders);
router.put(
  "/responses/:responseId/headers/:headerId",
  validator.validateIds(["responseId", "headerId"]),
  validator.validateBody(schemas.updateHeaderBody),
  controller.updateHeader
);
router.delete(
  "/responses/:responseId/headers/:headerId",
  validator.validateIds(["responseId", "headerId"]),
  controller.deleteHeader
);

// set up cookie routes
router.post(
  "/responses/:responseId/cookies",
  validator.validateIds(["responseId"]),
  validator.validateBody(schemas.createCookieBody),
  controller.createCookie
);
router.get("/responses/:responseId/cookies", validator.validateIds(["responseId"]), controller.getCookies);
router.put(
  "/responses/:responseId/cookies/:cookieId",
  validator.validateIds(["responseId", "cookieId"]),
  validator.validateBody(schemas.updateCookieBody),
  controller.updateCookie
);
router.delete(
  "/responses/:responseId/cookies/:cookieId",
  validator.validateIds(["responseId", "cookieId"]),
  controller.deleteCookie
);

// export router
module.exports = router;
