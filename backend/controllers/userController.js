import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// NOTE:
// @desc            Authenticate user & get token
// @route           POST /api/users/login
// @access          Public
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
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
