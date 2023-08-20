import { configureStore } from '@reduxjs/toolkit';
import gistReducer from "./features/gistSlice";

// create store instance
export const store = configureStore({
  reducer: {
    gist: gistReducer,
  },
});
