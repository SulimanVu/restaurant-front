import { BASE_URL, JWT_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_KEY } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../models";

interface IInitialState {
  jwt: string;
  user: User;
  isLoading: boolean;
}
const getUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? "");
    if (!user) {
      return {
        blocked: false,
        confirmed: false,
        createdAt: "",
        email: "",
        id: 1,
        provider: "",
        updatedAt: "",
        username: "",
      };
    }
    return user;
  } catch (error) {
    console.log("Error parse user");
    return {
      blocked: false,
      confirmed: false,
      createdAt: "",
      email: "",
      id: 1,
      provider: "",
      updatedAt: "",
      username: "",
    };
  }
};

const initialState: IInitialState = {
  jwt: localStorage.getItem(JWT_LOCALSTORAGE_KEY) ?? "",
  user: getUser(),
  isLoading: false,
};

export const registerThunk = createAsyncThunk<
  IInitialState,
  {
    username: string;
    password: string;
    email: string;
  }
>("register", async ({ username, password, email }, thunkAPI) => {
  try {
    const response = await axios.post<IInitialState>(
      BASE_URL + "/auth/local/register",
      {
        username,
        email,
        password,
      }
    );
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.user)
    );
    localStorage.setItem(
      JWT_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.jwt)
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Error");
  }
});

export const loginThunk = createAsyncThunk<
  IInitialState,
  {
    identifier: string;
    password: string;
  }
>("login", async ({ identifier, password }, thunkAPI) => {
  try {
    const response = await axios.post<IInitialState>(BASE_URL + "/auth/local", {
      identifier,
      password,
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.user)
    );
    localStorage.setItem(
      JWT_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.jwt)
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Error");
  }
});

export const authSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.user = {
        blocked: false,
        confirmed: false,
        createdAt: "",
        email: "",
        id: 1,
        provider: "",
        updatedAt: "",
        username: "",
      };
      state.jwt = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.jwt = action.payload.jwt;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
