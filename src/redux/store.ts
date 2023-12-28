import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "@/redux/features/basketSlice";
import categoriesSlice from "@/redux/features/categoriesSlice";
import favoriteSlice from "@/redux/features/favoriteSlice";
import productSlice from "@/redux/features/productSlice";
import userSlice from "@/redux/features/userSlice";

export const store = configureStore({
  reducer: {
    basketSlice,
    categoriesSlice,
    favoriteSlice,
    productSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
