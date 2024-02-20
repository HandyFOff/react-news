import styles from "./News.module.scss";

import NewsListSkeleton from "./NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";

import { TOTAL_PAGES } from "../../constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";

import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { useGetAllNewsQuery } from "../../store/services/newsApi";
import { useAppSelector } from "../../store";

const News = () => {
  const filters = useAppSelector((state) => state.newsSlice.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useGetAllNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <div className={styles.section}>
      <NewsFilters />
      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsListSkeleton
          news={data && data.news}
          isLoading={isLoading}
          type={"list"}
          direction={"list"}
          count={24}
        />
      </PaginationWrapper>
    </div>
  );
};

export default News;
