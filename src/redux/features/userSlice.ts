import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBasket } from '../models';
// import { IBasket } from "./basketSlice";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  basket: IBasket[];
}

interface UserState {
  users: User[];
  user: User;
}

const initialState: UserState = {
  users: [],
  user: {
    _id: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    basket: [],
  },
};

export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  'users/fetch',
  async (_, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/clients`);

    if (!res.ok) {
      return rejectWithValue('server error');
    }

    return res.json();
  }
);

export const getUser = createAsyncThunk<User, string, { rejectValue: string }>(
  'user/get',
  async (id, { rejectWithValue }) => {
    console.log(id)
    const res = await fetch(`http://localhost:3100/clients/${id.slice(1, id.length -1)}`);

    if (!res.ok) {
      return rejectWithValue('server error');
    }

    return res.json();
  }
);

export const updateUserBasket = createAsyncThunk<User, User, { rejectValue: string }>(
  'user/update',
  async (user, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:3100/clients/basket/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      return rejectWithValue('server error');
    }

    return res.json();
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state: UserState, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      })
      .addCase(getUser.fulfilled, (state: UserState, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(updateUserBasket.fulfilled, (state: UserState, action: PayloadAction<User>) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
