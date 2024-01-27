import styles from "./NewsFilters.module.scss";

import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import CategoriesSkeleton from "../Categories/Categories";
import Search from "../Search/Search";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories, isLoading: categoriesIsLoading } =
    useFetch(getCategories);

  return (
    <div className={styles.filters}>
      <CategoriesSkeleton
        currentCategory={filters.category}
        categories={dataCategories?.categories}
        changeFilter={changeFilter}
        type={"categories"}
        isLoading={categoriesIsLoading}
      />

      <Search keywords={filters.keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default NewsFilters;
