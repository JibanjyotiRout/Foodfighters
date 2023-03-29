const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowerCase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNo: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
