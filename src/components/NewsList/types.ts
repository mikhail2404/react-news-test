interface Source {
  id?: string;
  name: string;
}

export interface NewsData {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

interface Articles {
  articles: NewsData[];
}

export interface ApiResponse extends BaseQueryResponse {
  data: Articles;
}
