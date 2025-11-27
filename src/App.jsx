import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a El Rancho! Tu tienda online para mascotas 🐾" />
    </>
  );
}

export default App;
