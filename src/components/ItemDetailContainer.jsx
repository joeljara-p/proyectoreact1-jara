import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 🔥 CAMBIO AQUÍ
    const docRef = doc(db, "items", itemId);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();

          const itemData = {
            id: docSnap.id,
            name: data.name,
            description: data.description,
            img: data.img,
            stock: data.stock,
            price: data.valor,
            category: data.category,
          };

          setItem(itemData);
        } else {
          console.log("No existe el producto");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p className="container">Cargando...</p>;

  if (!item) return <p className="container">Producto no encontrado</p>;

  return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
