
import {sql} from "../config/postGresdb.js";

export const initPaymentResultModel = async () => {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS payment_result (
                id SERIAL PRIMARY KEY NOT NULL,
                status VARCHAR(100) NOT NULL,
                update_time VARCHAR(100) NOT NULL,
                email_address VARCHAR(100) NOT NULL,
                order_id INTEGER NOT NULL REFERENCES orders(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                `
        console.log("paymentResult database initialized successfully.");
    } catch (error) {
        console.log("Issue creating paymentResultModel sql table", error);
    }
}
