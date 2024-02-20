import styles from "./NewsFilters.module.scss";

import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import { useGetCategoriesQuery } from "../../store/services/newsApi";

const NewsFilters: React.FC = () => {
  const { data, isLoading } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
      <Slider step={100}>
        <Categories
          categories={data?.categories}
          type={"categories"}
          isLoading={isLoading}
          direction={"list"}
          count={0}
        />
      </Slider>

      <Search />
    </div>
  );
};

export default NewsFilters;
