import { createSlice } from "@reduxjs/toolkit";
import { Product, initialState } from "../utils/interface";
const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      products: [],
      amount: 0,
      price: 0,
    }
  );
};

const productSlice = createSlice({
  name: "products",
  initialState: dataFromLocalStorage(),
  reducers: {
    addProduct: (state, { payload }) => {
      const item: any = state.products.find(
        (product: Product) => product.id == payload.id
      );
      if (item) {
        item.amount += payload.amount;
      } else {
        state.products.push(payload);
      }
      productSlice.caseReducers.calculaTotal(state);
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter((item: Product) => {
        return item.id != payload;
      });
      productSlice.caseReducers.calculaTotal(state);
    },
    calculaTotal: (state) => {
      let price: number = 0;
      let amount: number = 0;
      state.products.forEach((item: initialState) => {
        price += item.price * item.amount;
        amount += item.amount;
      });
      state.amount = amount;
      state.price = price;
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
