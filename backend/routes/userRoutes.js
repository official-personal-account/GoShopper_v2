import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// Note: userRoutes file (this file) contains all routes that hit the /api/users routes.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get or app.post.
// Note: "/api/users" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
