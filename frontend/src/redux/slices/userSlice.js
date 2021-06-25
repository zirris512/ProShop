import { createSlice } from "@reduxjs/toolkit";

import { userLoginReducer, userRegisterReducer } from "../reducers/userReducers";

const userFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialUserState = {
    userInfo: userFromStorage,
};
const initialUserRegisterState = {
    userInfo: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: userLoginReducer,
});
export const userRegisterSlice = createSlice({
    name: "userRegister",
    initialState: initialUserRegisterState,
    reducers: userRegisterReducer,
});

export const { user_login_request, user_login_success, user_login_fail, user_logout } =
    userSlice.actions;
export const { user_register_request, user_register_success, user_register_fail } =
    userRegisterSlice.actions;
