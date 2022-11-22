import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NewsData } from "../../components/NewsList/types";
import { NewsState } from "../types";

const initialState: NewsState = {
  news: []
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state: NewsState, action: PayloadAction<NewsData[]>) => {
      state.news = action.payload;
    }
  }
});

export const { setNews } = newsSlice.actions;
