import { createSlice } from "@reduxjs/toolkit";

import { cartReducers } from "../reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};

const initialCartState = {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: cartReducers,
});

export const { add_item, remove_item, cart_save_shipping_address } = cartSlice.actions;
