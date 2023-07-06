import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: shortid.generate(),
      email: "1@1.1",
      password: "1234",
      userName: "홍길동",
      isLogin: false,
    },
  ],
  reducers: {
    // key value pair
    login: (state, action) => {
      return state.map((user) => {
        if (user.email === action.payload.email && user.password === action.payload.password) {
          return {
            ...user,
            isLogin: !user.isLogin,
          };
        } else {
          return user;
        }
      });
    },
    join: (state, action) => {
      const newUser = {
        id: shortid.generate(),
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.name,
        isLogin: false,
      };
      state.push(newUser);
    },
    logout: (state, action) => {
      // map, shortid
      return state.map((user) => {
        if (user.id === action.payload) {
          return { ...user, isLogin: false };
        } else {
          return user;
        }
      });
    },
  },
});

export const { login, join, logout } = userSlice.actions;
export default userSlice.reducer;
