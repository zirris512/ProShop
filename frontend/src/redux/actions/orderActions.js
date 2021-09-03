import axios from "axios";

import {
    order_create_request,
    order_create_success,
    order_create_fail,
    order_reset,
} from "../slices/orderSlice";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch(order_create_request());

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(`/api/orders`, order, config);

        dispatch(order_create_success(data));
    } catch (err) {
        dispatch(
            order_create_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    } finally {
        dispatch(order_reset());
    }
};
