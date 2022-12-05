import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { cartNum } = useSelector((state) => state.cart);

  return (
    <header className="l-header" id="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="nav__logo">HORAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/home" className="nav-link mx-3 nav__link">Home</NavLink>
              <NavLink to="/about" className="nav-link mx-3 nav__link">About</NavLink>
              <NavLink to="/contact" className="nav-link mx-3 nav__link">Contact</NavLink>
              <NavLink to="/cart" className="nav-link mx-3 nav__link">
                <i className="bx bx-cart bx-sm position-relative px-1">
                <span className="bg-success text-light rounded-circle position-absolute start-100 translate-middle badge" id="cartNum">
                  {cartNum}
                </span>
                </i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
