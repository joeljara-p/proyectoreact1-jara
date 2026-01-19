import React from "react";

const CartItem = ({ item, removeItem }) => {
  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "16px 0" }}>
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
