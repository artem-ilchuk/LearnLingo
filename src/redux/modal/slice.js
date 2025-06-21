import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: {
    name: " ",
    email: " ",
    password: " ",
    phoneNumber: " ",
  },
  isLoginModalOpen: false,
  isRegistrationModalOpen: false,
  isBookModalOpen: false,
  isLogOutModalOpen: false,
};
const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openLoginModal: (state, { payload }) => {
      state.isLoginModalOpen = true;
      state.users = payload;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
      state.users = initialState.users;
    },
    openRegistrationModal: (state, { payload }) => {
      state.isRegistrationModalOpen = true;
      state.users = payload;
    },
    closeRegistrationModal: (state) => {
      state.isRegistrationModalOpen = false;
      state.users = initialState.users;
    },
    openBookModal: (state, { payload }) => {
      state.isProfileModalOpen = true;
      state.users = payload;
    },
    closeBookModal: (state) => {
      state.isProfileModalOpen = false;
      state.users = initialState.users;
    },
    openLogOutModal: (state) => {
      state.isLogOutModalOpen = true;
    },
    closeLogOutModal: (state) => {
      state.isLogOutModalOpen = false;
    },
  },
});
export const {
  openLoginModal,
  closeLoginModal,
  openRegistrationModal,
  closeRegistrationModal,
  openBookModal,
  closeBookModal,
  openLogOutModal,
  closeLogOutModal,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
