import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// NOTE:
// @desc            fetch all products
// @route           GET /api/products
// @access          Public
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// NOTE:
// @desc        fetch a product
// @route       GET /api/products/:id
// @access      Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductsById };
