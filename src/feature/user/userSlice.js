import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser(state, action) {
      state.name = action.payload;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
