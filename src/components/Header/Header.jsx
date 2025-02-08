import React from "react";
import "./header.css";

function Header() {
    return (
      <header id="header">
        <div className="header-text">
          <h1>Diallo Store</h1>
          <p>Faites vos courses à bon prix et avec un service acceillant</p>
          <button className='button-header'>Produit</button>
        </div>
        <div className="header-bg-image"></div>
        
      </header>
    );
}

export default Header;