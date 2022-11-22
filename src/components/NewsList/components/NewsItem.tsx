import React from "react";

import {
  NewsContent,
  NewsImage,
  NewsItemWrapper,
  NewsTitle
} from "../NewList.style";

interface NewsItemProps {
  title: string;
  description: string;
  urlToImage: string;
}

const NewsItem = ({ title, description, urlToImage }: NewsItemProps) => {
  return (
    <NewsItemWrapper>
      <NewsImage src={urlToImage} alt={title} />
      <NewsTitle>{title}</NewsTitle>
      <NewsContent>{description}</NewsContent>
    </NewsItemWrapper>
  );
};

export default NewsItem;
