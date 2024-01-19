import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

// Note: orderRoutes file (this file) contains all routes that hit the /api/orders routes, at the backend.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get or app.post.
// Note: "/api/orders" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, checkObjectId, getOrderById);
router.route("/:id/pay").put(protect, checkObjectId, updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(protect, admin, checkObjectId, updateOrderToDelivered);

export default router;
