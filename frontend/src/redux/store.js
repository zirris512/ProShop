import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";
import { productListSlice, productDetailSlice } from "./slices/productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        productList: productListSlice.reducer,
        productDetails: productDetailSlice.reducer,
    },
});

export default store;
