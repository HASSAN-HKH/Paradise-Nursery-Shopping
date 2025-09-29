import React from "react";
import "../Pages/ProductSelection.css";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { addToCart } from "./CartState";
import { useSelector } from "react-redux";

const AromaticPlants = () => {
  const dispatch = useDispatch();

  const CartState = useSelector((state) => state.GlobalState.ItemsAdded);

  const AirPlants = [
    {
      id: 7,
      name: "Jasmine",
      imgpath: "public/images/jasmine.jpg",
      cost: 18,
      quantity: 1,

      desc: "Jasmine is a fragrant flowering plant with delicate white blossoms",
    },
    {
      id: 8,
      name: "Lavender",
      imgpath: "public/images/lavender.webp",
      cost: 20,
      quantity: 1,

      desc: "Lavender is a soothing herb with purple flowers and a calming fragrance",
    },
    {
      id: 9,
      name: "Lemon Balm",
      imgpath: "public/images/lemon.jfif",
      cost: 14,
      quantity: 1,

      desc: "The lemon plant has citrus-scented leaves and is valued for its refreshing aroma",
    },
    {
      id: 10,
      name: "Mint",
      imgpath: "public/images/Mint_Leaves.webp",
      cost: 12,
      quantity: 1,

      desc: "Mint is a fresh, aromatic herb with cooling properties",
    },
    {
      id: 11,
      name: "Rosemary",
      imgpath: "public/images/Rosemary.webp",
      cost: 15,
      quantity: 1,

      desc: "Rosemary is a woody, fragrant herb with needle-like leaves",
    },
    {
      id: 12,
      name: "Sage",
      imgpath: "public/images/sage.webp",
      cost: 18,
      quantity: 1,

      desc: "Sage is an aromatic herb with soft, silvery-green leaves",
    },
  ];

  function handleAddItem(item) {
    dispatch(addToCart(item));
    dispatch(addItem(item));
  }

  return (
    <>
      <section id="air">
        <h4>Aromatic Fragrant Plants</h4>
        <div className="plants">
          {AirPlants.map((plant, ind) => {
            return (
              <div key={ind} className="plant">
                <h5>{plant.name}</h5>
                <img src={plant.imgpath} alt="Image" />
                <p>${plant.cost}</p>
                <p>{plant.desc}</p>
                <button
                  onClick={() => handleAddItem(plant, plant.id)}
                  disabled={CartState[plant.id]}
                >
                  {CartState[plant.id] ? "Added to cart" : "Add to cart"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AromaticPlants;
