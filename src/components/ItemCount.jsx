import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const increment = () => { if(count < stock) setCount(count + 1); };
  const decrement = () => { if(count > 1) setCount(count - 1); };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ItemCount;
