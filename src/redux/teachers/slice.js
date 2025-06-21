import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    list: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = payload;
      })
      .addCase(getTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
