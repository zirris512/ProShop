import { createSlice } from "@reduxjs/toolkit";

import { orderCreateReducer } from "../reducers/orderReducers";

const initialOrderState = {
    order: {},
};

export const orderSlice = createSlice({
    name: "orderCreate",
    initialState: initialOrderState,
    reducers: orderCreateReducer,
});

export const { order_create_request, order_create_success, order_create_fail, order_reset } =
    orderSlice.actions;
