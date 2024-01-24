import axios from "axios";

const API_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({page_number, page_size, category}) => {
  try {
    const response = await axios.get(`${API_URL}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category },
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