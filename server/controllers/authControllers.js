const User = require("./../models/User");
const ErrorResponse = require("../utils/errorResponse");

// LOGIN API

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check if user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Generate JWT token
    const token = user.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token,
      username: user.username,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// REGSITER API

exports.registerController = async (req, res, next) => {
  const { name, username, email, password, followings, followers } = req.body;

  try {
    // Check if the user with the provided email already exists
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    // Create a new user
    user = new User({
      name,
      username,
      email,
      password,
      followers,
      followings,
    });

    // Save the user to the database
    await user.save();

    // Generate token using the JWT_SECRET from .env
    const token = user.getSignedJwtToken();

    // Send a success response with the token
    res
      .status(200)
      .json({
        success: true,
        token,
        username: user.username,
        userId: user._id,
      });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      error: "Registration failed",
    });
  }
};

// Get User Data by userId
exports.getUserDataController = async (req, res, next) => {
  const userId = req.query.userId;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: {
        username: user.username,
        name: user.name,
        email: user.email,
        followers: user.followers,
        followings: user.followings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error fetching user data",
    });
  }
};
