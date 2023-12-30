"use client"; //this is a client side component

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface CounterState {
    value: boolean
  }
  
const initialState = {
  value: false,
};

export const toogleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
    
  },
});

export const { show, hide } = toogleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.toggle.value

export default toogleSlice.reducer;