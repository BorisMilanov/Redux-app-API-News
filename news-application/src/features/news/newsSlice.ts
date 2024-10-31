import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '40a5fd6182ba4573b88c9e1c4fcccfc9';
const baseUrl = 'https://newsapi.org/v2/everything';

export interface Article {
    title: string;
    description: string;
    url: string;
}

interface NewsState {
    articles: Article[];
    loading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    articles: [],
    loading: false, 
    error: null,
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: 'opel',
          from: '2024-09-30',
          sortBy: 'publishedAt',
          apiKey: apiKey, 
        },
      });
      return response.data.articles.slice(0, 10);
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  });
  
  const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchNews.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
          state.loading = false;
          state.articles = action.payload;
        })
        .addCase(fetchNews.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch news';
        });
    },
  });
  
  export default newsSlice.reducer;