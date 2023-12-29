import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IFood {
  _id: string;
  name: string;
  image: string;
  info: string;
  categoryId: string;
  price: number;
  foodId: string;
}

interface IFoodState {
  allFood: IFood[] | null;
  currentFood: IFood | null;
}

const initialState: IFoodState = {
  allFood: null,
  currentFood: null,
};

export const fetchOneFood = createAsyncThunk<IFood, string>(
  "get/one/food",
  async (id, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/category/${id}`);
    if (!res.ok) {
      return rejectWithValue("server error");
    }

    return res.json();
  }
);

export const fetchManyFood = createAsyncThunk<IFood[]>(
  "get/many/food",
  async (_, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/food`);
    if (!res.ok) {
      return rejectWithValue("server error");
    }

    return res.json();
  }
);

export const updateFood = createAsyncThunk<
  IFood,
  { id: string; body: Partial<IFood> }
>("update/food", async ({ id, body }, { rejectWithValue }) => {
  const res = await fetch(`http://localhost:3100/food/edit/${id}`, {
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

const foodSlice = createSlice({
  name: "IFood",
  initialState,
  reducers: {},
  extraReducers: (buidler) => {
    buidler
      .addCase(
        fetchOneFood.fulfilled,
        (state: IFoodState, action: PayloadAction<IFood>) => {
          state.currentFood = action.payload;
        }
      )
      .addCase(
        fetchManyFood.fulfilled,
        (state: IFoodState, action: PayloadAction<IFood[]>) => {
          console.log(action.payload)
          state.allFood = action.payload;
        }
      )
      .addCase(
        updateFood.fulfilled,
        (state: IFoodState, action: PayloadAction<IFood>) => {
          state.currentFood = action.payload;
        }
      );
  },
});

export default foodSlice.reducer;
