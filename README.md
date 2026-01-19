# El Rancho - E-commerce React + Firebase

## 🔥 Descripción
**El Rancho** es una aplicación web de e-commerce desarrollada con **React** y conectada a **Firebase Firestore**.  
Permite a los usuarios ver un catálogo de productos, filtrar por categorías, ver el detalle de cada producto, agregar al carrito, y realizar una compra final con generación de orden en Firestore.

---

## 🚀 Tecnologías utilizadas

- **React**
- **React Router**
- **Firebase Firestore**
- **Context API (Carrito de compras)**
- **CSS (estilos personalizados)**

---

## 🧩 Funcionalidades

### ✅ Catálogo de productos
- Listado dinámico desde Firestore.
- Filtro por categorías (Perros / Gatos).
- Visualización en formato tarjeta con imagen, nombre y precio.

### ✅ Detalle del producto
- Vista con descripción completa.
- Selección de cantidad mediante `ItemCount`.
- Validación de stock.

### ✅ Carrito de compras
- Estado global con **Context API**.
- Mostrar productos agregados, cantidad, subtotal y total.
- Eliminar productos y vaciar carrito.

### ✅ Checkout y generación de orden
- Formulario con datos del comprador.
- Validaciones básicas (nombre, email, teléfono).
- Guarda la orden en Firestore y entrega el ID de compra.

### ✅ Navegación SPA
- React Router para cambiar de vistas sin recargar la página.
- Barra de navegación con enlaces y widget del carrito.

---

## 📁 Estructura del proyecto

