import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "@/redux/features/basketSlice";
import categoriesSlice from "@/redux/features/categoriesSlice";
import favoriteSlice from "@/redux/features/favoriteSlice";
import productSlice from "@/redux/features/productSlice";
import userSlice from "@/redux/features/userSlice";
import authSlice from "./features/authSlice";
import citySlice from "./features/citySlice";

import cafeSlice from "./features/cafeSlice";

import foodSlice from './features/foodSlice';
import restaurantSlice from './features/restaurantSlice';


export const store = configureStore({
  reducer: {
    basketSlice,
    categoriesSlice,
    favoriteSlice,
    productSlice,
    userSlice,
    authSlice,
    citySlice,
    foodSlice,
    cafeSlice,
    restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
