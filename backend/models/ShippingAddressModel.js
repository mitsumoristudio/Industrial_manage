
import {sql} from "../config/postGresdb.js";

export const initShippingAddressModel = async () => {
    try {
        await sql`
                CREATE TABLE IF NOT EXISTS shipping_address (
                    id SERIAL PRIMARY KEY,
                    address VARCHAR(100) NOT NULL,
                    city VARCHAR(100) NOT NULL,
                    postalCode VARCHAR(100) NOT NULL,
                    countryCode VARCHAR(100) NOT NULL,
                    orders_id INTEGER NOT NULL REFERENCES orders(id),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                    `
        console.log("shippingAddress Database initialized successfully.");
    } catch (error) {
        console.log("Issue creating shipping address sql table", error)
    }
}