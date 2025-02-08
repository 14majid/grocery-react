import React, { useState } from "react";
import {itemsLait, itemsEpiceSalé, itemsEpiceSucre, itemsboisson} from "./contain/item.js";
import "./product.css";
import "../../App.css";
import ProduitLetier from "./contain/ProduitLetier.jsx";


function RepeatLait() {
    return (
        <div className="produit">
          <div className="produit-header">
            <h1>Produit Laitiers, Oeufs, Fromages</h1>
            <div className="pl-bg"></div>
          </div>

          <div className="produit-container">
            {itemsLait.map((item)=><ProduitLetier key={item.id} img={item.image} name={item.name} price={item.price} />)}
          </div>
        </div>
    );
}

function RepeatSalé() {
    return (
        <div className="produit">
          <div className="produit-header">
            <h1>Epicerie Salé</h1>
            <div className="pl-bg2"></div>
          </div>

          <div className="produit-container">
            {itemsEpiceSalé.map((item)=><ProduitLetier key={item.id} img={item.image} name={item.name} price={item.price} />)}
          </div>
        </div>
    );
}


function RepeatSucre() {
  return (
      <div className="produit">
        <div className="produit-header">
          <h1>Epicerie Sucré</h1>
          <div className="pl-bg3"></div>
        </div>

        <div className="produit-container">
          {itemsEpiceSucre.map((item)=><ProduitLetier key={item.id} img={item.image} name={item.name} price={item.price} />)}
        </div>
      </div>
  );
}

function RepeatBoisson() {
  return (
      <div className="produit">
        <div className="produit-header">
          <h1>Boissons</h1>
          <div className="pl-bg4"></div>
        </div>

        <div className="produit-container">
          {itemsboisson.map((item)=><ProduitLetier key={item.id} img={item.image} name={item.name} price={item.price} />)}
        </div>
      </div>
  );
}



function Product() {
  const [selectedCategory, setSelectedCategory] = useState("laitier");

  const showLaitier = () => setSelectedCategory("laitier");
  const showSucre = () => setSelectedCategory("sucre");
  const showSale = () => setSelectedCategory("sale");
  const showBoisson = () => setSelectedCategory("boisson");

  return (
      <div id="product">
          <div className="All-product-header">
              <p onClick={showLaitier}>Produit Laitier</p>
              <p onClick={showSucre}>Epicerie Sucré</p>
              <p onClick={showSale}>Epicerie Salé</p>
              <p onClick={showBoisson}>Boissons</p>
          </div>
          <div className="All-product-body">
              {selectedCategory === "laitier" && <RepeatLait />}
              {selectedCategory === "sucre" && <RepeatSucre />}
              {selectedCategory === "sale" && <RepeatSalé />}
              {selectedCategory === "boisson" && <RepeatBoisson />}
          </div>
      </div>
  );
}
export default Product;