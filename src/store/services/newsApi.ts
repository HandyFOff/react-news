import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CategoriesApiResponse,
  IFetchProperties,
  NewsApiResponse,
} from "../../interfaces";
import { API_KEY, API_URL } from "../../constants";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsApiResponse, IFetchProperties>({
      query: (params) => ({
        url: "search",
        params: { apiKey: API_KEY, ...params },
      }),
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => ({
        url: "latest-news",
        params: { apiKey: API_KEY },
      }),
    }),
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => ({
        url: "available/categories",
        params: { apiKey: API_KEY },
      }),
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetLatestNewsQuery,
  useGetCategoriesQuery,
} = newsApi;
