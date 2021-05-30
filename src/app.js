// set up env variables
require("dotenv").config();

// import modules
const express = require("express");
const cookieParser = require("cookie-parser");
const coreRouter = require("./routers/core-router");
const mockRouter = require("./routers/mock-router");
const mongoDB = require("./database/mongo-db");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const openapiDoc = YAML.load("./openapi-spec.yaml");
const appInfo = require("../package.json");
const gitInfo = require("git-repo-info")();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// connect to db
mongoDB.connect();

// create express app
const app = express();

// get env variables
const PORT = process.env.PORT || 3000;

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan(":date[iso] :method :url :status :response-time ms"));
app.use(cors());

// set up routes
app.use("/v1/mock/responses", mockRouter);
app.use("/v1/mock/core", coreRouter);
app.use("/v1/mock/api-docs", swaggerUI.serve, swaggerUI.setup(openapiDoc));
app.use("/v1/mock/app-info", (req, res) => {
  res.send({
    name: appInfo.name,
    version: appInfo.version,
    branch: gitInfo.branch,
    commit: gitInfo.sha,
    message: gitInfo.commitMessage,
    date: gitInfo.committerDate
  });
});

// invalid routes
app.use((req, res, next) => {
  res.status(404).send({ errors: ["Route not found"] });
});

// custom error handler
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).send({ errors: error.list || [error.message] });
});

// start listening for requests
app.listen(PORT, () => console.log(`Mock service listening on port ${PORT}...`));
