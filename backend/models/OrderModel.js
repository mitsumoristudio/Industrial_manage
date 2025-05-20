
import {sql} from "../config/postGresdb.js";

export const initOrderModel = async () => {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS orders (
                    id SERIAL PRIMARY KEY,
                    user_id INTEGER NOT NULL REFERENCES users(id),
                    payment_method VARCHAR(255) NOT NULL,
                    items_price NUMERIC(10, 2) NOT NULL DEFAULT 0.0,
                    tax_price NUMERIC(10, 2) NOT NULL DEFAULT 0.0,
                    shipping_price NUMERIC(10, 2) NOT NULL DEFAULT 0.0,
                    total_price NUMERIC(10, 2) NOT NULL DEFAULT 0.0,
                    is_paid BOOLEAN NOT NULL DEFAULT FALSE,
                    paid_at TIMESTAMP,
                    is_delivered BOOLEAN NOT NULL DEFAULT FALSE,
                    delivered_at TIMESTAMP,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `
        console.log("orders Database initialized successfully");
    } catch (error) {
        console.log("Issue creating orderModel sql table")
    }
}