import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
