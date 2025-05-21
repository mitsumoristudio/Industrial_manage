
import {sql} from "../config/postGresdb.js";

export default async function initProductModel() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products (
                    id SERIAL PRIMARY KEY NOT NULL,
                    user_id INTEGER REFERENCES users(id),
                    name VARCHAR NOT NULL,
                    image VARCHAR NOT NULL,
                    brand VARCHAR NOT NULL,
                    category VARCHAR NOT NULL,
                    description TEXT NOT NULL,
                    rating NUMERIC DEFAULT 0 NOT NULL,
                    num_reviews INTEGER DEFAULT 0 NOT NULL,
                    price NUMERIC DEFAULT 0 NOT NULL,
                    count_in_stock INTEGER DEFAULT 0 NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
                `
        console.log("products Database initialized successfully");
    } catch (error) {
        console.log("Error connecting to products database", error)
    }
}