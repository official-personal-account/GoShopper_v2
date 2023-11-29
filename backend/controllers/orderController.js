import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// NOTE:
// @desc            Create new order
// @route           POST /api/orders
// @access          Private
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// NOTE:
// @desc            Get logged in user order
// @route           GET /api/orders/myorders
// @access          Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// NOTE:
// @desc            Get order by ID
// @route           GET /api/orders/:id
// @access          Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// NOTE:
// @desc            Update order to paid
// @route           PUT /api/orders/:id/pay
// @access          Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// NOTE:
// @desc            Update order to delivered
// @route           PUT /api/orders/:id/delivered
// @access          Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// NOTE:
// @desc            Get all orders
// @route           GET /api/orders/
// @access          Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
