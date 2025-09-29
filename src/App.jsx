import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Pages/Home";
import ProductSelection from "./Pages/ProductSelection";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/CartPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Paradise-Nursery-Shopping" element={<LandingPage />} />
          <Route
            path="/Paradise-Nursery-Shopping/ProductSelection"
            element={<ProductSelection />}
          />
          <Route
            path="/Paradise-Nursery-Shopping/CartPage"
            element={<Cart />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
