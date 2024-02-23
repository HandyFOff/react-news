import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilters } from "../../store/slices/newsSlice";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const { keywords } = useAppSelector((state) => state.newsSlice.filters);
  const dipatch = useAppDispatch();
  
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) =>
          dipatch(setFilters({ key: "keywords", value: e.target.value }))
        }
        placeholder={"Search"}
      />
    </div>
  );
};

export default Search;
