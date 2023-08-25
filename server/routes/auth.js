const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

const {
  registerController,
  loginController,
  getUserDataController,
} = require("./../controllers/authControllers");

router.route("/register").post(registerController);

router.route("/login").post(loginController);

router.route("/userdata").get(protect, getUserDataController);

module.exports = router;
