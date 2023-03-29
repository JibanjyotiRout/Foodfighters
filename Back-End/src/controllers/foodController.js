const foodModel = require("../models/foodModel");

const postFood = async function (req, res) {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ status: true, msg: "Please Enter Details" });
    }

    const valueOfId = await foodModel.find();
    if (valueOfId.length == 0) {
      req.body.id = 1;
    } else {
      req.body.id = valueOfId[valueOfId.length - 1].id + 1;
    }

    await foodModel.create(req.body);
    return res.status(201).json({ status: true, msg: "Details added" });
  } catch (err) {
    return res.json({ status: false, msg: "Something went wrong !!!" });
  }
};

const getFood = async function (req, res) {
  try {
    const isFoodAvialable = await foodModel.find();
    return res.json(isFoodAvialable);
  } catch (err) {
    return res.json({ status: false, msg: "Something went wrong !!!" });
  }
};

module.exports = { postFood, getFood };
