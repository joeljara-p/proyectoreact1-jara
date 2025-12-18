import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="item-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`} className="btn">Ver detalle</Link>
    </div>
  );
};

export default Item;
