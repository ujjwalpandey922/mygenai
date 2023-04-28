import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/">MyGenAI</Link>
      </div>

      <ul className="nav-links menu">
        <li>
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>

        <li>
          <span>
            <Link to="/about">About Us</Link>
          </span>
        </li>

        <li>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
