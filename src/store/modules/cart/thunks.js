import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
    dispatch(addToCart(product));
};

export const removeFromCartThunk = (id) => (dispatch) => {
    dispatch(removeFromCart(id));
};