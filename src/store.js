import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Components/CartSlice";
import GlobalStateReducer from "./Components/CartState";

const store = configureStore({
  reducer: {
    Cart: CartReducer,
    GlobalState: GlobalStateReducer,
  },
});

export default store;
