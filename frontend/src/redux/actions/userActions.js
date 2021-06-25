import axios from "axios";

import {
    user_login_request,
    user_login_success,
    user_login_fail,
    user_logout,
    user_register_request,
    user_register_success,
    user_register_fail,
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
    } catch (err) {
        dispatch(
            user_register_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};
