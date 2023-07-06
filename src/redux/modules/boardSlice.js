import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const boardSlice = createSlice({
  name: "board",
  initialState: [],
  reducers: {
    // key value
    addPost: (state, action) => {
      state.push({
        id: shortid.generate(),
        title: action.payload.title,
        contents: action.payload.contents,
        writerId: action.payload.writerId,
        isDeleted: false,
      });
    },
  },
});

export const { addPost } = boardSlice.actions;
export default boardSlice.reducer;
