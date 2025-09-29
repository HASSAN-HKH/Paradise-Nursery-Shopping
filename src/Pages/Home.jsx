import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h2>Welcome To Paradise Nursery</h2>
            <p>Where Green Meets Serenity</p>
            <button
              className={styles.button}
              onClick={() =>
                navigate("/Paradise-Nursery-Shopping/ProductSelection")
              }
            >
              Get Started
            </button>
          </div>
          <article className={styles.article}>
            <p className={styles.para}>
              Welcome to Paradise Nursery, where green meets serenity!
            </p>
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
            <br />
            <br /> Our team of experts is dedicated to ensuring that each plant
            meets our strict standards of quality and care. Whether you're a
            seasoned gardener or just starting your green journey, we're here to
            support you every step of the way. Feel free to explore our
            collection, ask questions, and let us help you find the perfect
            plant for your home or office.
            <br />
            <br /> Join us in our mission to create a greener, healthier world.
            Visit Paradise Nursery today and experience the beauty of nature
            right at your doorstep.
          </article>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
