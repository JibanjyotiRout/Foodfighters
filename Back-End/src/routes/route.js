const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");
const foodController = require("../controllers/foodController");

router.post("/customer/register", customerController.register);
router.get("/customer/login", customerController.login);

router.post("/food/details", foodController.postFood);
router.get("/food/details", foodController.getFood);

module.exports = router;
