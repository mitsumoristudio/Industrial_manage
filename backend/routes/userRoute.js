
import express from 'express';
import {logoutUser,
        authenticateUser,
        registerUser,
        getAllUsers,
        deleteUser,
        updateUser,
        getUser} from "../controller/userController.js";
import {protectRoutes, admin} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(getAllUsers);
router.route("/logout").post(logoutUser);
router.route("/login").post(authenticateUser);


router.route("/:id").get(protectRoutes, admin,getUser);
router.route("/:id").put(protectRoutes, admin, updateUser);
router.route("/:id").delete(protectRoutes, admin, deleteUser);

export default router;