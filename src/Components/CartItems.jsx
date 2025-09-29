import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItems.module.css";
import { deleteItem, increaseQuantity, decreaseQuantity } from "./CartSlice";
import { deleteFromCart } from "./CartState";

const CartSection = () => {
  const CartItems = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();

  //   console.log(CartItems);

  function handleDeleteItem(item) {
    dispatch(deleteFromCart(item));
    dispatch(deleteItem(item));
  }

  function handleIncrease(item) {
    dispatch(increaseQuantity(item));
  }

  function handleDecrease(item) {
    dispatch(decreaseQuantity(item));
  }

  return (
    <>
      <section id="cart-items" className={styles.sectionCart}>
        {CartItems.map((item, ind) => {
          return (
            <div className={styles.cartItem} key={ind}>
              <div className={styles.image}>
                <img src={item.imgpath} alt="Image" width={"100px"} />
              </div>
              <div className={styles.info}>
                <h4>{item.name}</h4>
                <p>${item.cost}</p>
                <div className={styles.controls}>
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <p>Total: ${item.quantity * item.cost}</p>
                <button onClick={() => handleDeleteItem(item)}>Delete</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CartSection;
