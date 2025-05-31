
import express from "express";
import {admin, protectRoutes} from "../middleware/authMiddleware.js";
import {addOrderItems, getAllOrders, deleteOrder, getOrderById, getMyOrders} from "../controller/orderController.js";

export const orderRoutes = express.Router();

orderRoutes.route("/").get(getAllOrders);
orderRoutes.route("/").post(protectRoutes, addOrderItems);
orderRoutes.route("/:id").get(protectRoutes, getOrderById);
orderRoutes.route("/myOrders").get(getMyOrders);
orderRoutes.route("/:id").delete(protectRoutes, deleteOrder);
