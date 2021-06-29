export const userLoginReducer = {
    user_login_request: (state) => {
        state.loading = true;
        state.error = null;
    },
    user_login_success: (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
    },
    user_login_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
    user_logout: (state) => {
        state.userInfo = null;
    },
};

export const userRegisterReducer = {
    user_register_request: (state) => {
        state.loading = true;
        state.error = null;
    },
    user_register_success: (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
    },
    user_register_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
};

export const userDetailsReducer = {
    user_details_request: (state) => {
        state.loading = true;
        state.error = null;
    },
    user_details_success: (state, { payload }) => {
        state.loading = false;
        state.user = payload;
    },
    user_details_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
};

export const userUpdateReducer = {
    user_update_request: (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
    },
    user_update_success: (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
    },
    user_update_fail: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    },
    user_update_reset: (state) => {
        state.userInfo = {};
    },
};
