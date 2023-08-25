const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: String, // Store the date as a string in "day month" format
    default: () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const currentDate = new Date();
      const day = currentDate.getDate();
      const monthIndex = currentDate.getMonth();
      const month = months[monthIndex];

      return `${day} ${month}`;
    },
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
});

// Create Tweet model
const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
