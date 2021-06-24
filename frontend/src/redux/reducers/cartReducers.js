export const cartReducers = {
    add_item: (state, { payload }) => {
        const existItem = state.cartItems.find((x) => x.product === payload.product);

        if (existItem) {
            state.cartItems = state.cartItems.map((x) =>
                x.product === existItem.product ? payload : x
            );
        } else {
            state.cartItems = [...state.cartItems, payload];
        }
    },
    remove_item: (state, { payload }) => {
        state.cartItems = state.cartItems.filter((x) => x.product !== payload);
    },
};
