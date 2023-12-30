"use client"; //this is a client side component

import { createSlice} from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UserState {
    profile: boolean
  }
  
const initialState = {
  profile: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    popup: (state) => {
      state.profile = true;
    },
    popout: (state) => {
      state.profile = false;
    },
    
  },
});

export const { popup, popout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.user.value

export default userSlice.reducer;