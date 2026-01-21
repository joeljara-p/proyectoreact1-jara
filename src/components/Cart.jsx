import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0)
    return <h2 className="container">🛒 Carrito vacío</h2>;

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>

      <h3>Total: ${totalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <Link to="/checkout">
        <button className="btn">Ir a Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
