import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import CustomPopup from "../CustomPopup";
import { CartBtn, List } from "./style";
import { GiShoppingCart } from "react-icons/gi";

const Cart = () => {
    const cart = useSelector((store) => store.cart);

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("fruitShopCart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <CartBtn onClick={(e) => setVisibility(!visibility)}>
                <b>{cart.length}</b>
                <GiShoppingCart size="4.8em" />
            </CartBtn>

            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
                title={`Carrinho - Total: R$ ${cart && cart.reduce((total, product) => total + Number(product.price), 0).toFixed(2)}`}
            >
                <List>
                    {cart.length === 0 ? <em>Vazio</em> : cart.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} isRemovable />
                    ))}
                </List>
            </CustomPopup>
        </>
    );
}

export default Cart;