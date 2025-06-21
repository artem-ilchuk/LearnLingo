import { createSlice } from "@reduxjs/toolkit";
import {
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
  updateFavoritesThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    favorites: [],
    isLoggedIn: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      if (!state.favorites.includes(payload)) {
        state.favorites.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((id) => id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoggedIn = false;
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoggedIn = false;
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {
          uid: payload.uid,
          name: payload.name,
          email: payload.email,
        };
        state.isLoggedIn = true;
        state.favorites = payload.favorites;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {
          uid: payload.uid,
          name: payload.name,
          email: payload.email,
        };
        state.isLoggedIn = true;
        state.favorites = payload.favorites;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return {
          ...initialState,
        };
      });
  },
});

export const { addFavorite, removeFavorite } = authSlice.actions;
export const authReducer = authSlice.reducer;
