import axios from "axios";

import {
    product_list_request,
    product_list_success,
    product_list_fail,
    product_details_request,
    product_details_success,
    product_details_fail,
} from "../slices/productSlice";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch(product_list_request());

        const { data } = await axios.get("/api/products");
        console.log(data);

        dispatch(product_list_success(data));
    } catch (err) {
        dispatch(
            product_list_fail(err.response?.data.message ? err.response.data.message : err.message)
        );
    }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch(product_details_request());

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch(product_details_success(data));
    } catch (err) {
        dispatch(
            product_details_fail(
                err.response?.data.message ? err.response.data.message : err.message
            )
        );
    }
};
