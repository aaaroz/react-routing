import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../../apis/APIProduct";

export const fetchPutProductById = createAsyncThunk(
  "fetch/putProduct",
  async (data) => {
    const result = await APIProducts.updateProduct(data.id, data);
    return result;
  }
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const ProductsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/putProduct/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase("fetch/putProduct/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = { payload };
    });

    builder.addCase("fetch/putProduct/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectProduct = (state) => state.product;

export default ProductsSlice.reducer;
