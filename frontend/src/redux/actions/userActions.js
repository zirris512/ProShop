import axios from "axios";

import {
    user_login_request,
    user_login_success,
    user_login_fail,
    user_logout,
    user_register_request,
    user_register_success,
    user_register_fail,
    user_details_request,
    user_details_success,
    user_details_fail,
    user_update_request,
    user_update_success,
    user_update_fail,
} from "../slices/userSlice";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(user_login_request());

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("/api/users/login", { email, password }, config);

        dispatch(user_login_success(data));

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch(
            user_login_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch(user_logout());
};

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch(user_register_request());

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("/api/users", { name, email, password }, config);

        dispatch(user_register_success(data));
        dispatch(user_login_success(data));

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch(
            user_register_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch(user_details_request());

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/users/${id}`, config);

        dispatch(user_details_success(data));
    } catch (err) {
        dispatch(
            user_details_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch(user_update_request());

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.put(`/api/users/profile`, user, config);

        dispatch(user_update_success(data));
        dispatch(user_login_success(data));
        dispatch(user_details_success(data));

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch(
            user_update_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};
