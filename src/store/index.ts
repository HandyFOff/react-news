import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./services/newsApi";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    newsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
