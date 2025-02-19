import { isValidObjectId } from "mongoose";

// function to help us check if an objectID is valid mongoose ID - vid
function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    throw new Error(`Invalid ObjectId of:  ${req.params.id}`);
  }
  next();
}

export default checkObjectId;
