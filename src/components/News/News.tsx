import styles from "./News.module.scss";

import NewsListSkeleton from "./NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";

import { PAGE_SIZE, TOTAL_PAGES } from "../../constants";

import { useFilters } from "../../helpers/hooks/useFilters";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useDebounce } from "../../helpers/hooks/useDebounce";

import { getNews } from "../../api/apiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { IFetchProperties, IFilters, NewsApiResponse } from "../../interfaces";

const News = () => {
  const { filters, changeFilter } = useFilters<IFilters>({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch<NewsApiResponse, IFetchProperties>(
    getNews,
    {
      ...filters,
      keywords: debouncedKeywords,
    }
  );

  return (
    <div className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />
      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        changeFilter={changeFilter}
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
