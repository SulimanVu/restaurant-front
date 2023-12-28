import { CITY_LOCALSTORAGE_KEY } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

type CityType = "Москва" | "Санкт-Петербург" | undefined;
interface IInitialState {
  city: CityType;
}

const initialState: IInitialState = {
  city: (localStorage.getItem(CITY_LOCALSTORAGE_KEY) as CityType) ?? undefined,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      localStorage.setItem(CITY_LOCALSTORAGE_KEY, action.payload);
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
