"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(window.localStorage.getItem("wishlist")) || [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      }
      window.localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleHeart } = wishlist.actions;
export default wishlist.reducer;
