import axios from "axios";
import { API_KEY, API_URL } from "../constants";

export const getNews = async ({
  page_number,
  page_size,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${API_URL}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category, keywords },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${API_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}available/categories`, {
      params: { apiKey: API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
