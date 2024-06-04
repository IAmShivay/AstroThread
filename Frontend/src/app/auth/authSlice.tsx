import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Login, Register } from "../../api/authApi";
import { saveToken, clearToken, getToken } from "../../utility/token";
import { RootState } from "../../store";

interface AuthState {
  user: string | "";
  token: string | "";
  isLoading: boolean;
  error: string | "";
  isAuthenticated: boolean;
  role: string | "";
}

const initialState: AuthState = {
  user: "",
  token: getToken(),
  isLoading: false,
  error: "",
  isAuthenticated: !!getToken(),
  role: "",
};

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const data = await Login(credentials);
      saveToken(data?.token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const data = await Register(credentials);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = "";
      state.token = "";
      state.isAuthenticated = false;
      state.role = "";
      clearToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: any; token: string; role: string }>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.role = action.payload.user.role; // Assuming role is part of the response
        }
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: any; token: string; role: string }>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.role = action.payload.user.role; // Assuming role is part of the response
        }
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
