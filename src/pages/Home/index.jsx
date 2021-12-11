import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <>
            <Header />
            <ProductList />
            <Toaster />
        </>
    );
};

export default Home;