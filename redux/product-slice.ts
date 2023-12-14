import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types";
import ProductService from "./service";

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  return await ProductService.getProduct();
});
const initialState = {
  pList: [] as ProductType[],
  isLoading: false,
  errMessage: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.isLoading = false;
          state.pList = action.payload;
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.errMessage = action.error.message || "";
      });
  },
});
export default productSlice.reducer;
