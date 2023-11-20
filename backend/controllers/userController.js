import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// NOTE:
// @desc            Authenticate user & get token
// @route           POST /api/users/login
// @access          Public
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  const user = await User.findOne({ email });

  // Because "user" is tied to the "User" model, the plain text password is passed on to the "matchPassword" method, as the "enteredPassword".
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d", // change to 1 day in production. Apply same to cookie maxAge
    });

    // Set JWT as HTTP-Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSiite: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days.
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// NOTE:
// @desc            Register User
// @route           POST /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// NOTE:
// @desc            Logout User & clear cookie
// @route           POST /api/users/logout
// @access          Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// NOTE:
// @desc            Get user profile
// @route           GET /api/users/profile
// @access          Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// NOTE:
// @desc            Update user profile
// @route           PUT /api/users/profile
// @access          Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// NOTE:
// @desc            Get users
// @route           GET api/users
// @access          Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// NOTE:
// @desc            Get user by ID
// @route           GET api/users/:id
// @access          Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// NOTE:
// @desc            Delete user
// @route           DELETE api/users/:id
// @access          Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// NOTE:
// @desc            Update user
// @route           PUT api/users/:id
// @access          Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
