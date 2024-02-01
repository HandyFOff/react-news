import styles from "./NewsFilters.module.scss";

import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import { CategoriesApiResponse, IFetchProperties, IFilters } from "../../interfaces";

interface Props {
  filters: IFilters;
  changeFilter: () => void;
}

const NewsFilters: React.FC<Props> = ({ filters, changeFilter }) => {
  const { data, isLoading } = useFetch<CategoriesApiResponse, IFetchProperties>(getCategories);

  return (
    <div className={styles.filters}>
      <Slider step={100}>
        <Categories
          currentCategory={filters.category}
          categories={data?.categories}
          changeFilter={changeFilter}
          type={"categories"}
          isLoading={isLoading}
          direction={"list"}
          count={0}
        />
      </Slider>

      <Search keywords={filters.keywords} changeFilter={changeFilter} />
    </div>
  );
};

export default NewsFilters;
