import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

interface CounterState {
  cartItems: IProduct[];
}

const initialState: CounterState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, actionPayload.payload);
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
