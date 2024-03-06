import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/user/userSlice';

const store = configureStore({
  reducer: {
    // cart: cartSlice,
    user: userSlice,
  },
});

export default store;
