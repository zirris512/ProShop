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

export const orderDetailsReducer = {};
