import { createSlice } from "@reduxjs/toolkit";

import { orderCreateReducer, orderDetailsReducer } from "../reducers/orderReducers";

const initialCreateOrderState = {
    order: {},
};
const initialOrderDetailsState = {
    order: {},
    loading: true,
};

export const createOrderSlice = createSlice({
    name: "orderCreate",
    initialState: initialCreateOrderState,
    reducers: orderCreateReducer,
});
export const orderDetailsSlice = createSlice({
    name: "orderDetails",
    initialState: initialOrderDetailsState,
    reducers: orderDetailsReducer,
});

export const { order_create_request, order_create_success, order_create_fail, order_reset } =
    createOrderSlice.actions;
export const { order_details_request, order_details_success, order_details_fail } =
    orderDetailsSlice.actions;
