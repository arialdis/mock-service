# Mock Service

A REST service for mocking API calls.

## Set up MongoDB

```bash
# run mongodb in a local docker container
docker run -d --name my-local-mongodb -p 27017:27017 mongo
```

## Run Service

```bash
# clone repo
git clone https://github.com/arialdis/mock-service.git
cd mock-service

# install dependencies
npm install

# create .env file
cp .env.example .env

# update .env file values if needed.
#   PORT: the port number where the service will run.
#   MONGODB_URL: the connection string to your MongoDB instance.

# start service
npm start
```

## Documentation

The OpenAPI specification can be found by navigating to http://localhost:3000/v1/mock/api-docs on a web browser once the service is running.

## Examples

_This section contains sample curl requests, but it's easier to work with an API testing tool like Postman._

The following request creates a mock response by defining its HTTP status and JSON body.

**Request**

```bash
curl --location --request POST 'http://localhost:3000/v1/mock/core/responses' \
--header 'Content-Type: application/json' \
--data-raw '{
  "status": 400,
  "body": {
    "errors": [
      "Something is wrong with the request"
    ]
  }
}'
```

**Response**

```json
{
  "response": {
    "status": 400,
    "body": {
      "errors": ["Something is wrong with the request"]
    },
    "headers": [],
    "cookies": [],
    "createdAt": "2021-04-21T06:51:54.945Z",
    "updatedAt": "2021-04-21T06:51:54.945Z",
    "responseId": "607fcb8a19edc05b5870d69d"
  }
}
```

The following request creates a mock response with a header and cookie.

**Request**

```bash
curl --location --request POST 'http://localhost:3000/v1/mock/core/responses' \
--header 'Content-Type: application/json' \
--data-raw '{
  "status": 200,
  "body": {
    "message": "Signed in successfully"
  },
  "headers": [
    {
      "key": "requestId",
      "value": "qwertyuiop1234567890"
    }
  ],
  "cookies": [
    {
      "name": "sessionId",
      "value": "asdfghjkl1234567890",
      "maxAge": 1800000,
      "secure": true,
      "httpOnly": true
    }
  ]
}'
```

**Response**

```json
{
  "response": {
    "status": 200,
    "body": {
      "message": "Signed in successfully"
    },
    "headers": [
      {
        "key": "requestId",
        "value": "qwertyuiop1234567890",
        "createdAt": "2021-04-21T07:04:46.123Z",
        "updatedAt": "2021-04-21T07:04:46.123Z",
        "headerId": "607fce8e19edc05b5870d69f"
      }
    ],
    "cookies": [
      {
        "name": "sessionId",
        "value": "asdfghjkl1234567890",
        "maxAge": 1800000,
        "secure": true,
        "httpOnly": true,
        "createdAt": "2021-04-21T07:04:46.123Z",
        "updatedAt": "2021-04-21T07:04:46.123Z",
        "cookieId": "607fce8e19edc05b5870d6a0"
      }
    ],
    "createdAt": "2021-04-21T07:04:46.123Z",
    "updatedAt": "2021-04-21T07:04:46.123Z",
    "responseId": "607fce8e19edc05b5870d69e"
  }
}
```

_After a mock response has been created, the mock service can return the same response with an optional time delay._

The mock service replies to the following request with the mock response that was previously created and applies a 500 ms delay to the response time.

**Request**

```bash
curl --location --request PATCH 'http://localhost:3000/v1/mock/responses/607fce8e19edc05b5870d69e/delay/500'
```

**Response**

```json
{
  "message": "Signed in successfully"
}
```

_The response contains a 200 HTTP status as well as the custom header and cookie that were defined originally._

For the full OpenAPI specification please refer to the Documentation section.
