import styles from "./NewsFilters.module.scss";

import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import CategoriesSkeleton from "../Categories/Categories";
import Search from "../Search/Search";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data, isLoading } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      <CategoriesSkeleton
        currentCategory={filters.category}
        categories={data?.categories}
        changeFilter={changeFilter}
        type={"categories"}
        isLoading={isLoading}
      />

      <Search keywords={filters.keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default NewsFilters;
