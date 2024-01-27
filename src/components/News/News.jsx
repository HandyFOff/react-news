import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import NewsBannerSkeleton from "./NewsBanner/NewsBanner";
import NewsListSkeleton from "./NewsList/NewsList";

import { PAGE_SIZE, TOTAL_PAGES } from "../../constants";
import { getCategories, getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import CategoriesSkeleton from "../Categories/Categories";
import { useFilters } from "../../helpers/hooks/useFilters";

const News = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading: newsIsLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories, isLoading: categoriesIsLoading } =
    useFetch(getCategories);

  return (
    <>
      <CategoriesSkeleton
        categories={dataCategories && dataCategories.categories}
        currentCategory={filters.category}
        changeFilter={changeFilter}
        isLoading={categoriesIsLoading}
        type={"categories"}
      />

      <Search keywords={filters.keywords} changeFilter={changeFilter} />

      <NewsBannerSkeleton
        item={dataNews && dataNews.news[0]}
        isLoading={newsIsLoading}
        type={"banner"}
      />

      <Pagination
        currentPage={filters.page_number}
        changeFilter={changeFilter}
        totalPage={TOTAL_PAGES}
      />

      <NewsListSkeleton
        news={dataNews && dataNews.news}
        isLoading={newsIsLoading}
        type={"list"}
      />

      <Pagination
        currentPage={filters.page_number}
        changeFilter={changeFilter}
        totalPage={TOTAL_PAGES}
      />
    </>
  );
};

export default News;
