import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">El Rancho</Link>
      </h2>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/perros">Perros</Link></li>
        <li><Link to="/category/gatos">Gatos</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;

