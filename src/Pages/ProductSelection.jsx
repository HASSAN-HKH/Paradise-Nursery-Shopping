import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./ProductSelection.css";
import { useNavigate } from "react-router-dom";
import AirPurfyingProducts from "../Components/AirPurfyingPlants";
import AromaticPlants from "../Components/AromaticPlants";
import { useSelector } from "react-redux";

const ProductSelection = () => {
  const navigate = useNavigate();

  const CartItems = useSelector((state) => state.Cart.items);

  const numberOfItems = CartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="main">
        <header>
          <div className="logo">
            <img
              src="/Paradise-Nursery-Shopping/images/logo.png"
              alt="Logo"
              width={"50px"}
              height={"50px"}
              onClick={() => navigate("/Paradise-Nursery-Shopping")}
            />
            <div className="intro">
              <h2>Paradise Nursery</h2>
              <p>Where Green Meets Serenity</p>
            </div>
          </div>
          <h3>Plants</h3>
          <div
            className="icon-cart"
            onClick={() => navigate("/Paradise-Nursery-Shopping/CartPage")}
            style={{ cursor: "pointer" }}
          >
            <span>{numberOfItems}</span>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
          </div>
        </header>
        <div className="container-products">
          <AirPurfyingProducts />
          <AromaticPlants />
        </div>
      </div>
    </>
  );
};

export default ProductSelection;
