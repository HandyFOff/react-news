import axios from "axios";
import { API_KEY, API_URL } from "../constants";
import {
  CategoriesApiResponse,
  IFetchProperties,
  NewsApiResponse,
} from "../interfaces";

export const getNews = async (
  params?: IFetchProperties
): Promise<NewsApiResponse> => {
  const { page_number, page_size, category, keywords } = params || {};

  try {
    const response = await axios.get<NewsApiResponse>(`${API_URL}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category, keywords },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { news: [], status: "error", page: 1 };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${API_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { news: [], status: "error", page: 1 };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(
      `${API_URL}available/categories`,
      {
        params: { apiKey: API_KEY },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      categories: [],
      status: "error",
      description: "categories not found",
    };
  }
};
