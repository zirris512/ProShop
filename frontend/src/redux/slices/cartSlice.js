import { createSlice } from "@reduxjs/toolkit";

import { cartReducers } from "../reducers/cartReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialCartState = {
    cartItems: cartItemsFromStorage,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: cartReducers,
});

export const { add_item, remove_item } = cartSlice.actions;
