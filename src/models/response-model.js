// import modules
const mongoose = require("mongoose");

// define schema objects
const headerSchema = new mongoose.Schema(
  {
    key: String,
    value: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.headerId = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const cookieSchema = new mongoose.Schema(
  {
    name: String,
    value: String,
    maxAge: Number,
    domain: String,
    path: String,
    secure: Boolean,
    httpOnly: Boolean,
    sameSite: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.cookieId = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

const responseSchema = new mongoose.Schema(
  {
    status: Number,
    body: Object,
    headers: [headerSchema],
    cookies: [cookieSchema]
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.responseId = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

// export model object
module.exports = mongoose.model("Response", responseSchema);
