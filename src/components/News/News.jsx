import NewsBanner from "./NewsBanner/NewsBanner";
import NewsList from "./NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Skeleton from "../Skeleton/Skeleton";
import Categories from "../Categories/Categories";
import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";

const skeletonsCount = 30;
const totalPage = 10;
const pageSize = 10;

const News = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: currentCategory,
        });
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [currentPage, currentCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(["all", ...response.categories]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const skeletonList = [...Array(skeletonsCount)].map((_, index) => (
    <Skeleton key={index} type={"item"} />
  ));

  return (
    <>
      <Categories categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>

      {isLoading ? (
        <Skeleton type={"banner"} />
      ) : (
        news.length && <NewsBanner item={news[0]} />
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />

      {isLoading ? skeletonList : news.length && <NewsList news={news} />}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default News;
