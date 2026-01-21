import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
        alt="carrito"
      />
      <span>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
