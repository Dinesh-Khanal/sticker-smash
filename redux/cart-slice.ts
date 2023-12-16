import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartSliceState {
  cartItems: { productId: number; qty: number }[];
}
const initialState: CartSliceState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartSliceState, action: PayloadAction<number>) => {
      const pId = action.payload;
      const exist = state.cartItems.find((item) => item.productId == pId);

      if (exist) {
        state.cartItems = state.cartItems.map((item) =>
          item.productId === pId ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cartItems = [...state.cartItems, { productId: pId, qty: 1 }];
      }
    },
    removeFromCart: (state: CartSliceState, action: PayloadAction<number>) => {
      const pId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== pId
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
