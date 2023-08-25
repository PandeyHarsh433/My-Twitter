import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "./tweet/tweetSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetReducer,
    auth: authReducer,
  },
});
