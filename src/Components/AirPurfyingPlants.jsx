import React, { useState } from "react";
import "../Pages/ProductSelection.css";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { useSelector } from "react-redux";
import { addToCart } from "./CartState";

const AirPurfyingProducts = () => {
  const dispatch = useDispatch();

  // const [disable, setDisable] = useState({});

  // console.log(disable);

  const CartItems = useSelector((state) => state.Cart.items);

  const CartState = useSelector((state) => state.GlobalState.ItemsAdded);

  console.log(CartState);

  const AirPlants = [
    {
      id: 1,
      name: "Snake Plant",
      imgpath: "public/images/snake.webp",
      cost: 15,
      quantity: 1,
      desc: "Snake plant has tall, upright, sword-shaped leaves with striking green patterns",
    },
    {
      id: 2,
      name: "Spider Plant",
      imgpath: "public/images/spider.webp",
      cost: 12,
      quantity: 1,
      desc: "Spider plant is a popular houseplant with long, arching leaves and baby plantlets",
    },
    {
      id: 3,
      name: "Aloe Vera",
      imgpath: "public/images/Aloe.jpg",
      cost: 10,
      quantity: 1,
      desc: "Aloe vera is a hardy succulent known for its thick, fleshy leaves filled with soothing",
    },
    {
      id: 4,
      name: "ZZ Plant",
      imgpath: "public/images/zz.webp",
      cost: 13,
      quantity: 1,
      desc: "ZZ plant has glossy, dark green leaves and is nearly indestructible",
    },
    {
      id: 5,
      name: "Jade Plant",
      imgpath: "public/images/jade.webp",
      cost: 17,
      quantity: 1,
      desc: "Jade plant is a charming succulent with small, rounded, glossy leaves",
    },
    {
      id: 6,
      name: "Cactus Plant",
      imgpath: "public/images/cactus.webp",
      cost: 18,
      quantity: 1,
      desc: "Cacti are drought-tolerant plants with unique shapes and spines",
    },
  ];

  function handleAddItem(item, iden) {
    // setDisable({ ...disable, [iden]: true });
    dispatch(addToCart(item));
    dispatch(addItem({ ...item, quantity: 1 }));
  }

  return (
    <>
      <section id="air">
        <h4>Air Purifying Plants</h4>
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

export default AirPurfyingProducts;
