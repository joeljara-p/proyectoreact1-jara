import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="container">
        <p>No hay productos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
