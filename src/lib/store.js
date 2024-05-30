import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./features/slice/cartSlice";
import wishlist from "./features/wishlist/hearSlice";
import { api } from "./features/api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      heart: wishlist,
      // cart: cartSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

// import { configureStore } from "@reduxjs/toolkit";
// import heartSlice from "./features/wishlist/hearSlice";
// import cartSlice from "./features/slice/cartSlice";
// import { api } from "./features/api/api";

// export const store = configureStore({
//   reducer: {
//     heart: heartSlice,
//     cart: cartSlice,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });
