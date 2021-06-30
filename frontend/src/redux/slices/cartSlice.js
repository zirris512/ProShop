import { createSlice } from "@reduxjs/toolkit";

import { cartReducers } from "../reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : "";

const initialCartState = {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: cartReducers,
});

export const { add_item, remove_item, cart_save_shipping_address, cart_save_payment_method } =
    cartSlice.actions;
