import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemCount = ({ stock, item }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useCart();

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    addItem(item, count);
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button className="btn" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
