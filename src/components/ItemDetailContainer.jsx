import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../data/productos";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const promise = new Promise(resolve => {
      setTimeout(() => resolve(productos.find(p => p.id === itemId)), 500);
    });

    promise.then(res => setItem(res));
  }, [itemId]);

  if (!item) return <p className="container">Cargando...</p>;

  return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
