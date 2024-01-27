import styles from "./Main.module.scss";
import News from "../components/News/News";
import LatestNews from "../components/LatestNews/LatestNews";
import { useFetch } from "../helpers/hooks/useFetch";
import { getNews } from "../api/apiNews";
import { useFilters } from "../helpers/hooks/useFilters";
import { useDebounce } from "../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../constants";

const Main = () => {
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

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <LatestNews banners={dataNews} isLoading={newsIsLoading} />
        <News
          changeFilter={changeFilter}
          filters={filters}
          dataNews={dataNews}
          isLoading={newsIsLoading}
        />
      </div>
    </main>
  );
};

export default Main;
