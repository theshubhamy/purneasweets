import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  name: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = "";
      state.password = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
