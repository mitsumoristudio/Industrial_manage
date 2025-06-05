
import { createSlice } from "@reduxjs/toolkit";
import {updateCart} from "../util/cartUtils"

// check if the cart is in localstorage cache
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : {cartItems: [],
    shippingAddress: {}, paymentMethod: 'Paypal'};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // The item to add to the cart
            const item = action.payload;

            // Check if the item is already in the cart
            const existItem = state.cartItems.find((x: any) => x._id === item._id);

            if (existItem) {
                // If exists, update quantity
                state.cartItems = state.cartItems.map((x: any) =>
                    x._id === existItem._id ? item : x
                );
            } else {
                // If not exists, add new item to cartItems
                state.cartItems = [...state.cartItems, item];
            }

            // Update the Price and save to local storage
            return updateCart(state);

        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x: any) => x._id !== action.payload);

            return updateCart(state);
        },

        resetCart: (state) => (state = initialState),

        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },

        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },

        clearCartItems: (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        }
    },

});
// Need to export as an action
export const {addToCart, removeFromCart, resetCart, saveShippingAddress, savePaymentMethod, clearCartItems} = cartSlice.actions;

export default cartSlice.reducer;