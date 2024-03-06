import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state) {
      return state;
    },
    createUser(state, action) {
      state.name = action.payload;
    },
  },
});

export const { createUser, getUser } = userSlice.actions;
export default userSlice.reducer;
