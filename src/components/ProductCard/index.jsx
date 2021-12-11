import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import { AddBtn, Container, Fruit, RemoveBtn } from "./style";
import { GiShoppingCart } from "react-icons/gi";

const ProductCard = ({ product, index, isRemovable = false }) => {
    const { id, name, price, image } = product;
    const dispatch = useDispatch();

    return (
        <>
            {isRemovable ? (
                <li key={index}>
                    <figure>
                        <img className="cover" src={image} alt={name} />
                        <figcaption>
                            {name}
                            <br />
                            <mark>R$&nbsp;{price.toFixed(2)}</mark>
                        </figcaption>
                        <RemoveBtn onClick={() => dispatch(removeFromCartThunk(id))}>&#10005;</RemoveBtn>
                    </figure>
                    <hr />
                </li>
            ) : (
                <Container>
                    <Fruit>
                        <img src={image}
                            alt={name} />
                        <figcaption>
                            <p>{name}</p>
                        </figcaption>
                        <mark>R$ {price.toFixed(2)}</mark>
                    </Fruit>
                    <AddBtn onClick={() => dispatch(addToCartThunk(product))}><GiShoppingCart size="2em" />Comprar</AddBtn>
                </Container>
            )}
        </>
    )
};

export default ProductCard;