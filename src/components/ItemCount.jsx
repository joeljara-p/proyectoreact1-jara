import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
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
