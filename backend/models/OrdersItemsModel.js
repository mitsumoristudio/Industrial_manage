
import {sql} from "../config/postGresdb.js";

export const initOrderItemsModel = async () => {
    try {
        await sql`
              CREATE TABLE IF NOT EXISTS orderitems (
                  id SERIAL PRIMARY KEY,
                  name VARCHAR NOT NULL,
                  qty NUMERIC DEFAULT 0 NOT NULL,
                  image VARCHAR NOT NULL,
                  price NUMERIC DEFAULT 0 NOT NULL,
                  product_id INTEGER NOT NULL REFERENCES products(id),
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
              );
              `

      //  console.log("orderItems Database initialized successfully.");
    } catch (error) {
        console.log("Issue creating OrderItemsModel sql table", error);
    }
}