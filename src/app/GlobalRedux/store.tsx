"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import toggleReducer from "./Features/toggle/toggleSlice";
import productReducer from "./Features/products/productSlice";
import userReducer from "./Features/user/userSlice";


const rootReducer = combineReducers({
  toggle: toggleReducer,
  product: productReducer,
  user: userReducer
  //add all your reducers here
},);






// MULTIPLE PAGE ROUTING

 export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
  }
  
  // Infer the type of makeStore
  export type AppStore = ReturnType<typeof makeStore>
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']