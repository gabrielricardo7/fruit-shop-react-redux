import Cart from "../../components/Cart";
import { MyHeader } from "./style";

const Header = () => {
  return (
    <MyHeader>
      <h1>
        Loja de Frutas
        <br />
        <small>by Gabriel Ricardo</small>
      </h1>
      <Cart />
    </MyHeader>
  );
};

export default Header;
