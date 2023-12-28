import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import citySlice from "./features/citySlice";

export const store = configureStore({
  reducer: { authSlice, citySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
