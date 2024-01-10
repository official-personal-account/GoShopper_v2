import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductById,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// Note: productRoutes file (this file) contains all routes that hit the /api/products routes, at the backend.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get or app.post.
// Note: "/api/products" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.

router.route("/").get(getProducts).post(protect, admin, createProduct); // Note: this means that if the call is a "GET" method at the home route, we call "getProducts"
router.get("/top-products", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct); // Note: if the call is a "GET" method at the home route with id param, we call "getProductById"
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
