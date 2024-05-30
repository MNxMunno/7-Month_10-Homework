import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/slice/cartSlice";
import wishlist from "./features/wishlist/hearSlice";
import { api } from "./features/api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      heart: wishlist,
      cart: cartSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
