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

// NOTE:
// @desc            create a product
// @route           POST /api/products
// @access          Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Product Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Product Brand",
    category: "Product Category",
    countInStock: 0,
    numReviews: 0,
    description: "Product Description",
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

// @desc            update a products
// @route           PUT /api/products/:id
// @access          Public/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status("404");
    throw new Error("Resource not found");
  }
});

// @desc            delete a products
// @route           DELETE /api/products/:id
// @access          Public/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status("404");
    throw new Error("Resource not found");
  }
});

export {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
