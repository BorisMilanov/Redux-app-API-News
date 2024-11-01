import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}


export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getArticles: builder.query<NewsResponse, string>({
      query: (query) => `everything?q=${query}&apiKey=40a5fd6182ba4573b88c9e1c4fcccfc9`, // Replace YOUR_API_KEY
    }),
  }),
});

export const { useGetArticlesQuery } = newsApi;
