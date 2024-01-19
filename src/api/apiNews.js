import axios from "axios";

const API_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
