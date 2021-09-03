export const orderCreateReducer = {
    order_create_request: (state) => {
        state.loading = true;
    },
    order_create_success: (state, { payload }) => {
        state.success = true;
        state.order = payload;
    },
    order_create_fail: (state, { payload }) => {
        state.error = payload;
    },
    order_reset: (state) => {
        state.loading = false;
        state.error = null;
        state.success = false;
    },
};

export const orderDetailsReducer = {
    order_details_request: (state) => {
        state.loading = true;
        state.error = null;
    },
    order_details_success: (state, { payload }) => {
        state.loading = false;
        state.order = payload;
    },
    order_details_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
};
