import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: gptReducer,
    
  },
});

export default appStore;