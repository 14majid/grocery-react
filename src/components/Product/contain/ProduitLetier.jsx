import React from "react";
import "../product.css";

function ProduitLetier(props) {
    return (
        <div className="All-container">
            <img src={props.img} alt="Product" />
            <div className=".All-container-body">
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default ProduitLetier;