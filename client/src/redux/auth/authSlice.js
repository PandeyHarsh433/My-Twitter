import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: localStorage.getItem("authToken") || null,
  userId: localStorage.getItem("userId") || null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const response = await fetch(
      "https://brave-crow-sarong.cyclic.cloud/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userId", data.userId);
    return data.userId;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    const response = await fetch(
      "https://brave-crow-sarong.cyclic.cloud/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to login user");
    }

    const data = await response.json();
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userId", data.userId);
    return data.userId;
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    if (!authToken) {
      throw new Error("Authentication required");
    }

    const response = await fetch(
      `https://brave-crow-sarong.cyclic.cloud/api/auth/userData?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();
    return data.user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.userId = payload;
        state.authToken = localStorage.getItem("authToken");
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.userId = payload;
        state.authToken = localStorage.getItem("authToken");
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const selectUserId = (state) => state.auth.userId;
export const selectAuthToken = (state) => state.auth.authToken;
export const selectUserData = (state) => state.auth.user;

export default authSlice.reducer;
