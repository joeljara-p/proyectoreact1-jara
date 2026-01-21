import React from "react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cart-card">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button className="btn-remove" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
