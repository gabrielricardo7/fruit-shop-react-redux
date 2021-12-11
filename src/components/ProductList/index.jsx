import { useSelector } from "react-redux";
import { List } from "./style";
import ProductCard from "../ProductCard";

const ProductList = () => {
    const products = useSelector((store) => store.products);

    return (
        <>
            <List>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </List>
        </>
    )
};

export default ProductList;