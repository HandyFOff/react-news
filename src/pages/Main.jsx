import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import styles from "./Main.module.scss";

import { getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const skeletonList = [...Array(30)].map((_, index) => (
    <Skeleton key={index} type={"item"} />
  ));

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isLoading ? (
          <Skeleton type={"banner"} />
        ) : news.length ? (
          <NewsBanner item={news[0]} />
        ) : null}

        {isLoading ? (
          skeletonList
        ) : news.length ? (
          <NewsList news={news} />
        ) : null}
      </div>
    </main>
  );
};

export default Main;
