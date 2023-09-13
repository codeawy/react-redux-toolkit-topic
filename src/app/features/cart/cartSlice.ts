import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";

interface CounterState {
  cartItems: IProduct[];
}

const initialState: CounterState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const { increaseAction } = counterSlice.actions;

export default cartSlice.reducer;
