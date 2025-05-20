
import {sql} from "../config/postGresdb.js";

export const initReviewModel = async () => {
    try {
        await sql`
             CREATE TABLE IF NOT EXISTS reviews (
                 id SERIAL PRIMARY KEY,
                 user_id INTEGER NOT NULL REFERENCES users(id),
                 name VARCHAR NOT NULL,
                 rating NUMERIC DEFAULT 0 NOT NULL,
                 comment VARCHAR NOT NULL,
                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
             );
             `

        console.log("reviews Database initialized successfully");
    } catch (error) {
        console.log("Issue creating ReviewModel sql table")
    }
}