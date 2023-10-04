import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../../apis/APIProduct";

export const fetchDeleteProduct = createAsyncThunk(
  "fetch/deleteProduct",
  APIProducts.deleteProduct
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const deleteProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/deleteProduct/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/deleteProduct/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/deleteProduct/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectProducts = (state) => state.products;

export default deleteProductSlice.reducer;
