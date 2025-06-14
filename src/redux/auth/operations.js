import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const goitAuthAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  goitAuthAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const resetAuthHeader = () => {
  goitAuthAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAuthAPI.post("/users/signup", credentials);
      setAuthHeader(data.token);
      toast.success("Registration successful! Welcome aboard.");
      return data;
    } catch (error) {
      if (error.response.data.code === 11000) {
        toast.error("User with this name already exists.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAuthAPI.post("/users/login", credentials);
      setAuthHeader(data.token);
      toast.success("Login successful! Welcome back.");
      return data;
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const lastPath =
        state.router?.location?.pathname || window.location.pathname;

      localStorage.setItem("lastVisitedPage", lastPath);
      await goitAuthAPI.post("/users/logout");
      resetAuthHeader();
      toast.success("Logout successful! We'll be waiting for you!");
    } catch (error) {
      toast.error("Logout failed. Try again. You are still with us!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("token is not exist");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await goitAuthAPI.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
