
import asyncHandler from "../middleware/asyncHandler.js";

import {sql} from "../config/postGresdb.js";

// @desc Update a Product
// @route POST /api/products/:id
// @access Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {name,
        image,
        brand,
        category,
        description,
        rating,
        num_reviews,
        price,
        count_in_stock } = req.body;

    try {
        const modifyProducts = await sql`
            UPDATE products
            SET name=${name}, image=${image}, brand=${brand}, category=${category},
            description=${description}, rating=${rating}, num_reviews=${num_reviews},
            price=${price}, count_in_stock=${count_in_stock}
            `;

        if (modifyProducts.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product was not found"
            })
        }

        res.status(200).json({success: true, data: modifyProducts[0]})
    } catch (error) {
        console.log("Error in updating product", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc Create a Product
// @route POST /api/products
// @access Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
    const {name,
           image,
           brand,
           category,
           description,
           rating,
           num_reviews,
           price,
           user_id,
           count_in_stock } = req.body;

    if (!name || !image || !brand || !category || !description || !price) {
        return res.status(400).json({success: false, message: "Please enter all the fields"})
    }
    try {
        const newProduct = await sql`
              INSERT INTO products (name, image, brand, category, description, rating, num_reviews, price, count_in_stock, user_id)
              VALUES (${name}, ${image}, ${brand}, ${category}, ${description}, ${rating}, ${num_reviews}, ${price}, ${count_in_stock}, ${user_id})
              RETURNING *
            `;
        res.status(201).json({success: true, data: newProduct[0]})
    } catch (error) {
        console.log("Error in creating product", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc Fetch All Products
// @route POST /api/products
// @access Public
export const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // language=SQL format=false
const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
            `;
        console.log("fetched products", products);
        res.status(200).json({success: true, data: products});

    } catch (error) {
        console.log("Error in getAllProducts", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
})


// @desc Fetch a Product
// @route POST /api/products/:id
// @access Public
export const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const product = await sql`
                SELECT * FROM products WHERE id = ${id}
        `;
        res.status(200).json({success: true, data: product[0]})
    } catch (error) {
        console.log("Error in getProduct function", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc Delete a Product
// @route POST /api/products/:id
// @access Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await sql`
        DELETE FROM products WHERE id = ${id}
            RETURNING *
        `;

        if (deletedProduct.length === 0) {
            return res.status(404).json({success: false, message: 'Product not found'});
        }
        res.status(200).json({success: true, data: deletedProduct[0]});

    } catch (error) {
        console.log("Error deleting product", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})


