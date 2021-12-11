import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import toast from "react-hot-toast";

const fruitCart = JSON.parse(localStorage.getItem("fruitShopCart")) || [];

const cartReducer = (state = fruitCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action;

            if (!state.some((cartItem) => cartItem.id === product.id)) {
                toast.success(`${product.name} dentro do carrinho!`);
                return [...state, product];
            } else {
                toast.error(`${product.name} está no carrinho!`);
                return state;
            }

        case REMOVE_FROM_CART:
            const { id } = action;
            const newList = state.filter((product) => product.id !== id);
            const itemOut = state.find((itemOnCart) => itemOnCart.id === id).name;

            toast.success(`${itemOut} fora do carrinho!`);
            return newList;

        default:
            return state;
    }
};

export default cartReducer;