import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { login, Register } from "../../api/authApi";
import { saveToken, clearToken, getToken } from "../../utility/token";
interface AuthState {
  user: string | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: getToken(),
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const data = await login(credentials);
      saveToken(data.token,data.expireDate);
      return data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: { name: string; password: string,email:string }, thunkAPI) => {
    try {
      const data = await Register(credentials);
      saveToken(data.token,data.expireDate);
      return data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      clearToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: string; token: string }>) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: string; token: string }>) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state:any) => state.auth;
export default authSlice.reducer;
