// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
}

const initialState: UserState = {
  email: '',
  // cartProducts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    // setCartProducts(state, action: PayloadAction<any[]>) {
    //   state.cartProducts = action.payload;
    // },
  },
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
