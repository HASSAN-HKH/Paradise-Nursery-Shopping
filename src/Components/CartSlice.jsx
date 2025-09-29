import React, { act } from "react";
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (!existed) {
        state.items.push({ ...action.payload });
      }
    },
    deleteItem: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (existed) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    increaseQuantity: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (existed) {
        existed.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existed = state.items.find((item) => item.id === action.payload.id);
      if (existed && existed.quantity > 1) {
        existed.quantity -= 1;
      }
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
