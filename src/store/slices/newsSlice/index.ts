import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INews } from "../../../interfaces";
import { PAGE_SIZE } from "../../../constants";
import { NewsSlice, SetFilters } from "./types";

const initialState: NewsSlice = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  },
};

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[] | undefined>) => {
      if (action.payload) {
        state.news = action.payload;
      }
    },
    setFilters: (state, action: PayloadAction<SetFilters>) => {
      state.filters = {
        ...state.filters,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export default newsSlice.reducer;
export const { setFilters, setNews } = newsSlice.actions;
