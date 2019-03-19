import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            ΟΧΗΜΑΤΑ ΔΗΜΟΥ ΧΙΟΥ
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/CreateNew">Δημιουργία</Link>
            </li>
            <li>
              <Link to="/Search">Αναζήτηση</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
