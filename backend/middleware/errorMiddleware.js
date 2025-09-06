// THE ERROR HANDLER FUNCTION - vid25 mern-ecommerce
// When we call a mongoose method and there is an error, the error is returned to us in the form of an html page. These functions below helps us overwrite & customise the default error message to our own. We can do without these functions

// addresses a situation where an item is not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// customise the stack error from mongoose
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
