
import express from 'express';
import {logoutUser,
        authenticateUser,
        registerUser,
        getAllUsers,
        deleteUser,
        updateUser,
        getUser} from "../controller/userController.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(getAllUsers);
router.route("/logout").post(logoutUser);
router.route("/login").post(authenticateUser);

router.route("/:id").get(getUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

export default router;