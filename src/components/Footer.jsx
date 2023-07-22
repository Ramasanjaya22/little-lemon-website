import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links"  style={{ display: 'flex', flexDirection: 'column' }}>
          <SocialIcon
            url="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            fgColor="white"
          />
          </ul>
        </li>
      </menu>
    </footer>
  );
};

export default Footer;
