import { createSlice } from "@reduxjs/toolkit";

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateReducer,
} from "../reducers/userReducers";

const userFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialUserState = {
    userInfo: userFromStorage,
};
const initialUserRegisterState = {
    userInfo: null,
};
const initialUserDetailsState = {
    user: {},
};
const initialUserUpdateState = {
    userInfo: {},
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
export const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: initialUserDetailsState,
    reducers: userDetailsReducer,
});
export const userUpdateSlice = createSlice({
    name: "userUpdate",
    initialState: initialUserUpdateState,
    reducers: userUpdateReducer,
});

export const { user_login_request, user_login_success, user_login_fail, user_logout } =
    userSlice.actions;
export const { user_register_request, user_register_success, user_register_fail } =
    userRegisterSlice.actions;
export const { user_details_request, user_details_success, user_details_fail } =
    userDetailsSlice.actions;
export const { user_update_request, user_update_success, user_update_fail, user_update_reset } =
    userUpdateSlice.actions;
