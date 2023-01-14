import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src="../src/assets/logo-jjk.png" alt="Logo-JJK" />
      </Link>
      <ul>
        <li>
          <NavLink to="/" className="link">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
