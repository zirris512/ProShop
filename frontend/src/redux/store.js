import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";
import { productListSlice, productDetailSlice } from "./slices/productSlice";
import {
    userSlice,
    userRegisterSlice,
    userDetailsSlice,
    userUpdateSlice,
} from "./slices/userSlice";
import { createOrderSlice, orderDetailsSlice } from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        productList: productListSlice.reducer,
        productDetails: productDetailSlice.reducer,
        userLogin: userSlice.reducer,
        userRegister: userRegisterSlice.reducer,
        userDetails: userDetailsSlice.reducer,
        userUpdate: userUpdateSlice.reducer,
        orderCreate: createOrderSlice.reducer,
        orderDetails: orderDetailsSlice.reducer,
    },
});

export default store;
