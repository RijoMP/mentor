// slice/slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isFetching: boolean;
  isAuthenticated: boolean;
  name: string;
}

export interface RootState {
  user: UserState;
}

const initialState: UserState = {
  isFetching: false,
  isAuthenticated: false,
  name: "collins",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    updateUser: (state, action: PayloadAction<UserState>) => {
      state.isFetching = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.name = action.payload.name;
    },
    logoutRdc: (state) => {
      state.isAuthenticated = false;
      // ... clear other user-related state properties if needed
    },
  },
});

export const { setIsFetching, updateUser,logoutRdc } = userSlice.actions;

export default userSlice.reducer;
