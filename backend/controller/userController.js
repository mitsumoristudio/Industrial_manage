
import {sql} from "../config/postGresdb.js";
import jwt from "jsonwebtoken";
import {generateToken} from "../config/generateToken.js";
import asyncHandler from "../middleware/asyncHandler.js";
import bcryptjs from "bcryptjs";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authenticateUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    const { id } = req.params;

    const findUser = await sql`
        SELECT * FROM users WHERE id = ${id}
            `;

    if (findUser.length > 0) {
        return res.status(404).json({success: false, message: 'User already exists, try again'});
    }

    // Encrpyt the password so it is not stored in plain text. We are checking if the password has been modified. If it has, we are generating
   // a salt and hashing the password.

    try {
        const salt = await bcryptjs.genSalt(10);
        const newpassword = await bcryptjs.hash(password, salt);

        const newUser = await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${newpassword})
            RETURNING *
            `;

        if (newUser.length > 0) {
            generateToken(res, newUser[0].id);

            res.status(201).json({
                success: true,
                data: newUser[0],
            })
        } else {
            res.status(400);
            throw new Error("Invalid User Data");
        }

    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
export const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {httpOnly: true, expires: new Date(0)});
    // used to clear the cookie

    res.status(200).json({message: "User logged out successfully"});
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await sql`
            SELECT * FROM users 
            ORDER BY created_at DESC
            `;
        console.log("fetched users", users);
        res.status(200).json({success: true, data: users});

    } catch (error) {
        console.log("Error in getAllUsers", error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }


})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUser = asyncHandler(async (req, res) => {

})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUser = asyncHandler(async (req, res) => {

})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {

})