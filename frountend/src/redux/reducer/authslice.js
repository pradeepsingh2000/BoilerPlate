import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  role: "user",
  isLogin: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
  },
});

export const { setUser } = authSlice.actions;

export const loginUser = (state) => state.auth;

export default authSlice.reducer;