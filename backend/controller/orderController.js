
import asyncHandler from "../middleware/asyncHandler.js";
import {calcPrices} from "../utils/calcPrices.js";
import {sql} from "../config/postGresdb.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asyncHandler(async (req, res) => {
    const {
        items_price,
        payment_method,
        tax_price,
        shipping_price,
        total_price,
        is_paid,
        is_delivered,
    } = req.body;

        try {
            const newOrder = await sql`
                INSERT INTO orders (payment_method, items_price, tax_price, shipping_price, total_price, is_paid, is_delivered)
                VALUES (${payment_method}, ${items_price}, ${tax_price}, ${shipping_price}, ${total_price}, ${is_delivered}, ${is_paid})
                RETURNING *
                `;
            res.status(201).json({success: true, data: newOrder[0]})
        } catch (error) {
            console.log("Error adding order item", error);
            res.status(500).json({success: false, message: 'Internal Server Error'});
        }
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
export const getAllOrders = asyncHandler(async (req, res) => {
    try {
        const orders = await sql`
            SELECT * FROM orders
            ORDER BY created_at DESC
            `;
        console.log("fetched orders", orders);
        res.status(200).json({success: true, data: orders});

    } catch (error) {
        console.log("Error getting all order", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
// Its not stored in userCollection
export const getOrderById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const order = await sql`
            SELECT * FROM orders WHERE id = ${id}
            `;
        res.status(200).json({success: true, data: order[0]});
    } catch (error) {
        console.log("Error in getOrderById", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc    Delete a Order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
export const deleteOrder = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOrder = await sql`
            DELETE FROM orders WHERE id = ${id}
                RETURNING *
        `;
        if (deletedOrder.length === 0) {
            return res.status(404).json({success: false, message: 'Order was not found'});
        }
        res.status(200).json({success: true, data: deletedOrder[0]});

    } catch (error) {
        console.log("Error in deleteOrder", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = asyncHandler(async (req, res) => {
     const userId = req.user.id;

     const orders = await sql`
        SELECT * FROM orders WHERE user_id = ${userId}
        `;
     res.status(200).json({success: true, data: orders[0]});
})

