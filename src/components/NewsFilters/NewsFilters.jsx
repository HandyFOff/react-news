import styles from "./NewsFilters.module.scss";

import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data, isLoading } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      <Slider step={100}>
        <Categories
          currentCategory={filters.category}
          categories={data?.categories}
          changeFilter={changeFilter}
          type={"categories"}
          isLoading={isLoading}
        />
      </Slider>

      <Search keywords={filters.keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default NewsFilters;
