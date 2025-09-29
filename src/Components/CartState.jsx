import { createSlice } from "@reduxjs/toolkit";

const CartState = createSlice({
  name: "GlobalState",
  initialState: {
    ItemsAdded: {},
  },
  reducers: {
    addToCart: (state, action) => {
      state.ItemsAdded = { ...state.ItemsAdded, [action.payload.id]: true };
    },
    deleteFromCart: (state, action) => {
      state.ItemsAdded = { ...state.ItemsAdded, [action.payload.id]: false };
    },
  },
});

export const { addToCart, deleteFromCart } = CartState.actions;
export default CartState.reducer;
