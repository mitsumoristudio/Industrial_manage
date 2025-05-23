
import jwt from 'jsonwebtoken';
import {sql} from "../config/postGresdb.js";
import asyncHandler from "./asyncHandler.js";

export const protectRoutes = asyncHandler(async (req, res, next) => {
    let token;

    // Read the JWT from the jwt Cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

            req.user = await sql`
                SELECT * FROM users WHERE id = ${decoded.id}
            `;

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Unauthorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Unauthorized, token not found');
    }
})

export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an Admin');
    }
}