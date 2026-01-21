import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // VALIDACIONES
    if (quantity <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }

    if (quantity > item.stock) {
      alert("No hay suficiente stock disponible");
      return;
    }

    setCart(prev => {
      const existing = prev.find(prod => prod.id === item.id);

      if (existing) {
        const newQuantity = existing.quantity + quantity;

        if (newQuantity > item.stock) {
          alert("No hay suficiente stock para esa cantidad");
          return prev;
        }

        return prev.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: newQuantity }
            : prod
        );
      }

      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
