const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
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
    foodType: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    pickupDate: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("food", foodSchema);
