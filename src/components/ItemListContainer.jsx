import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from "../data/productos";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Filtrar productos por categoría si se pasa categoryId
    let filtered = productos;
    if (categoryId) {
      filtered = productos.filter(p => p.category === categoryId);
    }
    setItems(filtered);
  }, [categoryId]);

  return (
    <div className="container">
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
