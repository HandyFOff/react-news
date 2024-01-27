import styles from "./News.module.scss";

import Pagination from "../Pagination/Pagination";
import NewsListSkeleton from "./NewsList/NewsList";

import { TOTAL_PAGES } from "../../constants";
import NewsFilters from "../NewsFilters/NewsFilters";

const News = ({ changeFilter, filters, dataNews, isLoading }) => {
  return (
    <div className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <Pagination
        currentPage={filters.page_number}
        changeFilter={changeFilter}
        totalPage={TOTAL_PAGES}
      />

      <NewsListSkeleton
        news={dataNews && dataNews.news}
        isLoading={isLoading}
        type={"list"}
        direction={"list"}
        count={24}
      />

      <Pagination
        currentPage={filters.page_number}
        changeFilter={changeFilter}
        totalPage={TOTAL_PAGES}
      />
    </div>
  );
};

export default News;
