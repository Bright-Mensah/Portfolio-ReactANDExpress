import React from "react";
import "../CSS/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-ul">
          <Link className="nav-Links" to="/">
            <li className="nav-li">Home</li>
          </Link>
          <Link className="nav-Links" to="/about">
            <li className="nav-li">About</li>
          </Link>
          <Link className="nav-Links" to="/skillsandworks">
            <li className="nav-li">Skills&Works</li>
          </Link>
          <Link className="nav-Links" to="/contact">
            <li className="nav-li">contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
