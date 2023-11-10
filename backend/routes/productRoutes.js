import express from "express";
import {
  getProducts,
  getProductsById,
} from "../controllers/productControllers.js";
const router = express.Router();

// Note: productRoute file (this file) contains all routes that hit the /api/products routes.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get.
// Note: "/api/products" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.
router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
