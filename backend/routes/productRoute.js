
import express from 'express';
import {getAllProducts,
        updateProduct,
        createProduct,
        getProduct,
        deleteProduct} from "../controller/productController.js";

// add protect routes which verifies the token and find by UserID

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);
router.route("/").post(createProduct);

export default router;