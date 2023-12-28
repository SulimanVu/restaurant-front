import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFood } from "./foodSlice";

export interface IRestaurant {
  name: string;
  image: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
  role: string;
  menu: IFood[];
}

interface RestaurantState {
  restaurant: IRestaurant | null;
  allRestaurants: IRestaurant[];
}

const initialState: RestaurantState = {
  restaurant: null,
  allRestaurants: [],
};

export const fetchOneRestaurant = createAsyncThunk<IRestaurant, string>(
  "get/one/restaurant",
  async (id, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/cafe/${id}`);
    if (!res.ok) {
      return rejectWithValue("server error");
    }

    return res.json();
  }
);

export const fetchManyRestaurant = createAsyncThunk<IRestaurant[]>(
  "get/many/restaurant",
  async (_, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/cafe`);
    if (!res.ok) {
      return rejectWithValue("server error");
    }

    return res.json();
  }
);

export const updateRestaurant = createAsyncThunk<
  IRestaurant,
  { id: string; body: Partial<IRestaurant> }
>("get/many/restaurant", async ({ id, body }, { rejectWithValue }) => {
  const res = await fetch(`http://localhost:3100/cafe/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return rejectWithValue("server error");
  }

  return res.json();
});

const restaurantSlice = createSlice({
  name: "IRestaurant",
  initialState,
  reducers: {},
  extraReducers: (buidler) => {
    buidler
      .addCase(
        fetchOneRestaurant.fulfilled,
        (state: RestaurantState, action: PayloadAction<IRestaurant>) => {
          state.restaurant = action.payload;
        }
      )
      .addCase(
        fetchManyRestaurant.fulfilled,
        (state: RestaurantState, action: PayloadAction<IRestaurant[]>) => {
          state.allRestaurants = action.payload;
        }
      )
      .addCase(
        updateRestaurant.fulfilled,
        (state: RestaurantState, action: PayloadAction<IRestaurant>) => {
          state.restaurant = action.payload;
        }
      );
  },
});

export default restaurantSlice.reducer;
