import { createSlice } from "@reduxjs/toolkit";

import { productDetailsReducers, productListReducers } from "../reducers/productReducers";

const initialProductListState = {
    products: [],
};

const initialProductDetailState = {
    product: { reviews: [] },
};

export const productListSlice = createSlice({
    name: "productList",
    initialState: initialProductListState,
    reducers: productListReducers,
});

export const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: initialProductDetailState,
    reducers: productDetailsReducers,
});

export const { product_list_request, product_list_success, product_list_fail } =
    productListSlice.actions;
export const { product_details_request, product_details_success, product_details_fail } =
    productDetailSlice.actions;
