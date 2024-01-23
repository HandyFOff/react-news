import { useEffect, useState } from "react";
import styles from "./Main.module.scss";

import { getNews } from "../api/apiNews";
import News from "../components/News/News";

const pageSize = 10;

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [currentPage]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <News
          news={news}
          isLoading={isLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default Main;
