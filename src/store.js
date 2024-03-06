import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/user/userSlice';
import cartSlice from './feature/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
