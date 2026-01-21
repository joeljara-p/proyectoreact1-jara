import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, description, price, stock, img }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem({ id, name, price, stock, img }, quantity);
    setAdded(true);
  };

  return (
    <div className="detail">
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <strong>${price}</strong>
        </p>
        <p>Stock: {stock}</p>

        {!added ? (
          <ItemCount stock={stock} onAdd={handleAdd} />
        ) : (
          <p>✔ Producto agregado</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
