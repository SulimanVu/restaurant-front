import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "@/redux/features/basketSlice";
import categoriesSlice from "@/redux/features/categoriesSlice";
import favoriteSlice from "@/redux/features/favoriteSlice";
import productSlice from "@/redux/features/productSlice";
import userSlice from "@/redux/features/userSlice";
import authSlice from "./features/authSlice";
import citySlice from "./features/citySlice";

export const store = configureStore({
  reducer: {
    basketSlice,
    categoriesSlice,
    favoriteSlice,
    productSlice,
    userSlice,
    authSlice,
    citySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
