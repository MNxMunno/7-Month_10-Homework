"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
  value: JSON.parse(window.localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;

      //   let index = state.value.findIndex((i) => i.id === action.payload.id);
      //   if (index < 0) {
      //     state.value = [...state.value, { ...action.payload, quantity: 1 }];
      //     // toast.error("Nimadur xato");
      //   } else {
      //     state.value = state.value.map((item, inx) =>
      //       inx === index ? { ...item, quantity: item.quantity + 1 } : item
      //     );
      //     toast("Maxsulot qo`shildi 😊", {
      //       position: "top-center",
      //       autoClose: 2000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "light",
      //       transition: Bounce,
      //     });
      //   }
      //   localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = action.payload;
      //   state.value = state.value.filter((i) => i.id !== action.payload);
      //   window.localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incrementCart: (state, action) => {
      state.value = action.payload;
      //   let index = state.value.findIndex((i) => i.id === action.payload.id);
      //   state.value = state.value.map((item, inx) =>
      //     inx === index ? { ...item, quantity: item.quantity - 1 } : item
      //   );
      //   window.localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCart: (state, action) => {
      state.value = action.payload;
      //   let index = state.value.findIndex((i) => i.id === action.payload.id);
      //   state.value = state.value.map((item, inx) =>
      //     inx === index ? { ...item, quantity: item.quantity - 1 } : item
      //   );
      //   window.localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      //   window.localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  incrementCart,
  removeFromCart,
  decrementCart,
  deleteAllCart,
} = cartSlice.actions;
export default cartSlice.reducer;
