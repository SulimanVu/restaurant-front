import {
  BASE_URL,
  JWT_LOCALSTORAGE_KEY,
  USER_ID_LOCALSTORAGE_KEY,
} from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IInitialState {
  token: string;
  userID: string;
  role: string;
  isLoading: boolean;
  error?: string;
}

interface IRegisterPayload {
  name: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
}

interface ILoginPayload {
  mail: string;
  password: string;
}

const initialState: IInitialState = {
  token: localStorage.getItem(JWT_LOCALSTORAGE_KEY) ?? "",
  userID: localStorage.getItem(USER_ID_LOCALSTORAGE_KEY) ?? "",
  role: "",
  isLoading: false,
  error: "",
};

export const registerThunk = createAsyncThunk<IInitialState, IRegisterPayload>(
  "register",
  async ({ name, phone, password, mail, address, city }, thunkAPI) => {
    try {
      const response = await axios.post<{
        _id: string;
        token: string;
        role: string;
      }>(BASE_URL + "/signup", {
        name,
        phone,
        password,
        mail,
        address,
        city,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_ID_LOCALSTORAGE_KEY,
        JSON.stringify(response.data._id)
      );
      localStorage.setItem(
        JWT_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.token)
      );
      return {
        token: response.data.token,
        userID: response.data._id,
        isLoading: false,
        role: response.data.role,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const loginThunk = createAsyncThunk<IInitialState, ILoginPayload>(
  "login",
  async ({ mail, password }, thunkAPI) => {
    try {
      const response = await axios.post<{
        id: string;
        token: string;
        role: string;
      }>(BASE_URL + "/signin", {
        mail,
        password,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_ID_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.id)
      );
      localStorage.setItem(
        JWT_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.token)
      );

      return {
        token: response.data.token,
        userID: response.data.id,
        isLoading: false,
        role: response.data.role,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const authSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
      localStorage.removeItem(USER_ID_LOCALSTORAGE_KEY);
      state.userID = "";
      state.token = "";
      state.role = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userID = action.payload.userID;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.error = undefined;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userID = action.payload.userID;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.error = undefined;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
