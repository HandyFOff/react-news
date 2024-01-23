import NewsBanner from "./NewsBanner/NewsBanner";
import NewsList from "./NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Skeleton from "../Skeleton/Skeleton";

const skeletonsCount = 30;
const totalPage = 10;

const News = ({ news, isLoading, currentPage, setCurrentPage }) => {
  const skeletonList = [...Array(skeletonsCount)].map((_, index) => (
    <Skeleton key={index} type={"item"} />
  ));

  return (
    <>
      {isLoading ? (
        <Skeleton type={"banner"} />
      ) : news.length ? (
        <NewsBanner item={news[0]} />
      ) : null}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />

      {isLoading ? skeletonList : news.length ? <NewsList news={news} /> : null}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default News;
