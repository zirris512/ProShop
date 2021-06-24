export const productListReducers = {
    product_list_request: (state) => {
        state.loading = true;
        state.products = [];
    },
    product_list_success: (state, { payload }) => {
        state.loading = false;
        state.products = payload;
    },
    product_list_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
};

export const productDetailsReducers = {
    product_details_request: (state) => {
        state.loading = true;
    },
    product_details_success: (state, { payload }) => {
        state.loading = false;
        state.product = payload;
    },
    product_details_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
};
