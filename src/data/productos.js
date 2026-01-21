import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

/**
 * Obtiene todos los productos desde Firestore
 * Cada producto debe tener:
 * - name
 * - valor
 * - stock
 * - categoria
 * - img (URL pública de Firebase Storage)
 */
export const getProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));

    const productos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return productos;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
