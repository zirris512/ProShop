import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";
import { productListSlice, productDetailSlice } from "./slices/productSlice";
import {
    userSlice,
    userRegisterSlice,
    userDetailsSlice,
    userUpdateSlice,
} from "./slices/userSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        productList: productListSlice.reducer,
        productDetails: productDetailSlice.reducer,
        userLogin: userSlice.reducer,
        userRegister: userRegisterSlice.reducer,
        userDetails: userDetailsSlice.reducer,
        userUpdate: userUpdateSlice.reducer,
    },
});

export default store;
