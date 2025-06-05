
import { ChevronDownIcon, } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon} from '@heroicons/react/20/solid'
import React, {useEffect} from "react";
import  { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FaTrash} from "react-icons/fa";
import {toast} from "react-toastify";
import Meta from "../components/Meta";
import {addToCart, removeFromCart} from "../features/cartSlice.ts"

export default function CartSummaryScreen() {
    const cart = useSelector((state) => state.cartSlice)
    const user = useSelector((state) => state.auth);
    const {cartItems} = cart

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({...product, qty}));
    }
    const removeToCartHandler = async (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        if (cartItems && cartItems.length === 0) {
            toast.error("Cart is empty");
        }
        if (user && cartItems.length > 0) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    }

    return (
        <>
        </>
            )
}