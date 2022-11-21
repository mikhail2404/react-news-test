import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {AuthState, LogInDetails} from "../types";

const initialState: AuthState = {
  logInDetails: {username: null, password: null},
  loggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setLogInDetails: (state: AuthState, action: PayloadAction<LogInDetails>) => {
      state.logInDetails = action.payload;
    },
  }
});

export const {  setLoggedIn, setLogInDetails } = authSlice.actions;