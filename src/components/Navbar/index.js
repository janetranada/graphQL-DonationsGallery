import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink
            exact
            to="/"
            className="navbar-item-link"
            activeClassName="selected"
          >
            Gallery
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            to="/favorites"
            className="navbar-item-link"
            activeClassName="selected"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
