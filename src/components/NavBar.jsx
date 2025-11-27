import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        height: "70px",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px"
      }}
    >
      <h2>El Rancho</h2>

      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li><a href="#" style={{ color: "white" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "white" }}>Productos</a></li>
        <li><a href="#" style={{ color: "white" }}>Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
