const bcrypt = require("bcrypt");
const customerModel = require("../models/customerModel");

const register = async function (req, res) {
  try {
    req.body.email = req.body.email.trim().toLowerCase();

    const isCustomerExist = await customerModel.findOne({
      email: req.body.email,
    });

    if (isCustomerExist) {
      return res
        .status(404)
        .send({ status: false, msg: "Customer already exist, Try to login" });
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    await customerModel.create(req.body);
    return res.status(201).send({ status: true, msg: "Customer Registered" });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "Something went wrong !!!, Try again" });
  }
};

const login = async function (req, res) {
  try {
    req.body.email = req.body.email.trim().toLowerCase();

    const isCustomerExist = await customerModel.findOne({
      email: req.body.email,
    });
    if (!isCustomerExist) {
      return res
        .status(404)
        .send({ status: false, msg: "Customer Not Found, Try to Register" });
    }

    if (await bcrypt.compare(req.body.password, isCustomerExist.password)) {
      return res.status(200).send({
        status: true,
        msg: "Login successful",
      });
    } else {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter valid credentials" });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "Something went wrong !!!, Try again" });
  }
};

module.exports = { register, login };
