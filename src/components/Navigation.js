import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.webp";
import navLogo from "../assets/nav-logo.png";
const Navigation = (props) => {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={navLogo}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
      <a
        className="hover-effect"
        href={menuIcon}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>Reservations</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Order</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>
    </menu>
  );
};

export default Navigation;