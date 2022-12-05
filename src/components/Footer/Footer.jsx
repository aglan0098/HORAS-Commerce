import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid bd-container">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            HORAS
          </a>
          <span className="footer__description">Online Shoping</span>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Services</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Social Accounts</h3>
          <div>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook bx-md" />
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram bx-md" />
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter bx-md" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__copy">© 2022 Aglan. All right reserved</p>

      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon" />
      </a>
    </footer>
  );
}
