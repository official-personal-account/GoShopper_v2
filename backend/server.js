import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import colors from "colors";
const port = process.env.PORT || 8000;

connectDB(); // Note: connects to MongoDB from {import connectDB from "./config/db.js"}

const app = express();

// Body parser middleware
app.use(express.json()); // Note: parses data (e.g. form data) in json payload (format)
app.use(express.urlencoded({ extended: true })); // Note: encodes data in a format that is accepted or readable under http protocol, before sending over http

app.get("/", function (req, res) {
  res.send("API is running...");
});

// Note: app.use is an express routing method, used in place of app.get.
// Note: Anytime the specified route (/api/products) is hit, it looks into the corresponding route file (productRoutes).
// Note: And then, it prefix (adds) the route to all the routes in the file, and serve the appropriate response.
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, function () {
  console.log(` Server started on port ${port} `.blue.inverse);
});
