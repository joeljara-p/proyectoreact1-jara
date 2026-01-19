import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // <-- CAMBIO AQUÍ
    const productsCollection = collection(db, "items");

    const q = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : query(productsCollection);

    getDocs(q)
      .then((snapshot) => {
        console.log("📌 snapshot.docs:", snapshot.docs);

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            description: data.description,
            img: data.img,
            stock: data.stock,
            price: data.valor,
            category: data.category,
          };
        });

        console.log("📌 Productos:", products);

        setItems(products);
      })
      .catch((err) => {
        console.log("❌ ERROR FIRESTORE:", err);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container">
      {greeting && <h2>{greeting}</h2>}

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
