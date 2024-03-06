import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    incrementQuantity(state, action) {
      const updatedItem = state.cart.find((item) => item.id === action.payload);
      return updatedItem.quantity + 1;
    },
    decrementQuantity(state, action) {
      const updatedItem = state.cart.find((item) => item.id === action.payload);
      return updatedItem.quantity - 1;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
