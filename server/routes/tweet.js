const express = require("express");
const router = express.Router();
const {
  createTweetController,
  deleteTweetController,
  editTweetController,
  getAllTweetsController,
  getSingleTweetController,
} = require("../controllers/tweetControllers");
const { protect } = require("../middlewares/authMiddleware");

router.route("/create").post(protect, createTweetController);
router.route("/delete").delete(protect, deleteTweetController);
router.route("/edit").patch(protect, editTweetController);
router.route("/getTweet").get(protect, getSingleTweetController);
router.route("/getTweets").get(getAllTweetsController);

module.exports = router;
