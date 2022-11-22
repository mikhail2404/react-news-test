import styled from "styled-components";

const NewsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const NewsItemWrapper = styled.div`
  display: flex;
  max-width: 18rem;
  flex-direction: column;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 5px rgb(0 0 0 / 10%);
  background: #fff;
  color: #000;
  gap: 0.5rem;
`;

const NewsTitle = styled.h3`
  flex: 1;
`;

const NewsImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const NewsContent = styled.p``;

export { NewsContent, NewsImage, NewsItemWrapper, NewsListWrapper, NewsTitle };
