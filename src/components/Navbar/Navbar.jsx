import React from "react";
import "./navbar.css";
import logo from "./logo2.png";

function Menu() {
    return (
        <> 
          <p><a href="#">Acceuil</a></p>
          <p><a href="#product">Produits</a></p>
          <p><a href="#about">A propos</a></p>
          <p><a href="#contact">Contact</a></p> 
        </>
    )
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <h1>Diallo Store</h1>
      </div>
      <div className="navbar-menu">
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;