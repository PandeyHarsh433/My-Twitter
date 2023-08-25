const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middlewares/authMiddleware");

router.route("/userdata").get(protect, getPrivateRoute);

module.exports = router;
