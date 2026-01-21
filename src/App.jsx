import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* HERO DE INICIO */}
              <div className="hero">
                <div className="hero-content">
                  <h1>Bienvenido a El Rancho 🐾</h1>
                  <p>Todo para el cuidado de tu mascota</p>
                </div>
              </div>

              <ItemListContainer />
            </>
          }
        />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />

        <Route
          path="*"
          element={<h2 className="error">404 - Página no encontrada</h2>}
        />
      </Routes>

      {/* FOOTER */}
      <footer>
        <p>© 2026 El Rancho - Todos los derechos reservados.</p>
        <div className="redes-sociales">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-reac-37a24.firebasestorage.app/o/logoinstagram.jpg?alt=media&token=bc849254-4871-4b0b-9a71-c4a53ed2f06c"
              alt="Instagram"
            />
          </a>

          <a
            href="https://wa.me/56998641246"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-reac-37a24.firebasestorage.app/o/logowatsapp.jpg?alt=media&token=99c966f0-dd21-4199-9d31-e3d99e01f689"
              alt="WhatsApp"
            />
          </a>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
