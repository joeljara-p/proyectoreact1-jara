import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ name, description, price, stock, img }) => {
  return (
    <div className="detail">
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>${price}</strong></p>
        <p>Stock: {stock}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
