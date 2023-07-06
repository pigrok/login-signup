import boardSlice from "../modules/boardSlice";
import userSlice from "../modules/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  // 객체 key value pair
  reducer: {
    boardSlice: boardSlice,
    userSlice: userSlice,
  },
});
export default store;
