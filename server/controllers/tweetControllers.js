const Tweet = require("./../models/Tweet");

exports.createTweetController = async (req, res, next) => {
  const { user, description, likes, comments, shares } = req.body;

  try {
    const newTweet = new Tweet({
      user,
      description,
      likes,
      comments,
      shares,
    });

    await newTweet.save();

    res.status(201).json({
      success: true,
      tweet: newTweet,
    });
  } catch (error) {
    console.error("Error creating tweet:", error);
    res.status(500).json({
      success: false,
      error: "Tweet creation failed",
    });
  }
};

exports.deleteTweetController = async (req, res, next) => {
  const tweetId = req.query.tweetId;

  try {
    const deletedTweet = await Tweet.findByIdAndDelete(tweetId);

    if (!deletedTweet) {
      return res.status(404).json({
        success: false,
        error: "Tweet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tweet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Tweet deletion failed",
    });
  }
};

exports.editTweetController = async (req, res, next) => {
  const tweetId = req.query.tweetId;
  const { description, likes, comments, shares } = req.body;

  try {
    const updatedTweet = await Tweet.findByIdAndUpdate(
      tweetId,
      { description, likes, comments, shares },
      { new: true }
    );

    if (!updatedTweet) {
      return res.status(404).json({
        success: false,
        error: "Tweet not found",
      });
    }

    res.status(200).json({
      success: true,
      tweet: updatedTweet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Tweet update failed",
    });
  }
};

exports.getAllTweetsController = async (req, res, next) => {
  try {
    const tweets = await Tweet.find().populate("user", [
      "username",
      "_id",
      "name",
    ]);

    const formattedTweets = tweets.map((tweet) => ({
      user: {
        username: tweet.user.username,
        userId: tweet.user._id,
        name: tweet.user.name,
      },
      id: tweet._id,
      description: tweet.description,
      date: tweet.date,
      likes: tweet.likes,
      comments: tweet.comments,
      shares: tweet.shares,
    }));

    res.status(200).json({
      success: true,
      tweets: formattedTweets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching tweets",
    });
  }
};

exports.getSingleTweetController = async (req, res, next) => {
  const tweetId = req.query.tweetId;

  try {
    const tweet = await Tweet.findById(tweetId).populate("user", [
      "username",
      "_id",
    ]);

    if (!tweet) {
      return res.status(404).json({
        success: false,
        error: "Tweet not found",
      });
    }

    res.status(200).json({
      success: true,
      tweet: {
        user: {
          username: tweet.user.username,
          userId: tweet.user._id,
        },
        description: tweet.description,
        date: tweet.date,
        likes: tweet.likes,
        comments: tweet.comments,
        shares: tweet.shares,
        id: tweet._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching the tweet",
    });
  }
};
