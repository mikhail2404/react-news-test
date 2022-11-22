import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { newsApi } from "../../common/const";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setNews } from "../../redux/reducers/newsSlice";

import NewsItem from "./components/NewsItem";
import { NewsListWrapper } from "./NewList.style";
import { ApiResponse } from "./types";

const NewsList = () => {
  const { news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useQuery("news", () => axios.get(newsApi), {
    onSuccess: (data: ApiResponse) => dispatch(setNews(data.data.articles))
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <NewsListWrapper>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.description} {...newsItem} />
      ))}
    </NewsListWrapper>
  );
};

export default NewsList;
