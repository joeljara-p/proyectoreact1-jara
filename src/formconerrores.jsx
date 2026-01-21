import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validación: carrito vacío
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    // Crear orden
    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);

      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.log("Error al crear la orden:", error);
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      {orderId ? (
        <div>
          <h3>✔ Compra realizada</h3>
          <p>
            Tu ID de orden es: <strong>{orderId}</strong>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />

          <button className="btn" type="submit">
            Confirmar compra
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
