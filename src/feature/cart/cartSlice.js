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
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decrementQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => {
    return sum + item.totalPrice;
  }, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
export default cartSlice.reducer;
