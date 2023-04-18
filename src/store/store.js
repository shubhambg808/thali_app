import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "../counterSlice/storeSlice";

export const store = configureStore({
  reducer: {
    storeSlice: storeSlice,
  },
});
