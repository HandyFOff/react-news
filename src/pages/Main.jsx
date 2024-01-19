import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import styles from "./Main.module.scss";

import { getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();

        setNews(response.news);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {news.length ? <NewsBanner item={news[0]} /> : null}
        {news.length ? <NewsList news={news}/> : null}
      </div>
    </main>
  );
};

export default Main;
