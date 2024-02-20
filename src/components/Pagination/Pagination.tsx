import styles from "./Pagination.module.scss";
import Pages from "./Pages/Pages";
import Button from "../../ui/Button/Button";

import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";
import { TOTAL_PAGES } from "../../constants";

export interface IPagination {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<IPagination> = ({ currentPage, totalPages }) => {
  const dispatch = useAppDispatch();

  const handlePagePrev = () => {
    if (currentPage > 1) {
      dispatch(setFilters({ key: "page_number", value: (currentPage -= 1) }));
    }
  };

  const handlePageNext = () => {
    if (currentPage < TOTAL_PAGES) {
      dispatch(setFilters({ key: "page_number", value: (currentPage += 1) }));
    }
  };

  return (
    <div className={`${styles.pagination}`}>
      <Button
        text={"<"}
        handler={handlePagePrev}
        style={styles.pagination__btn}
      />
      <Pages currentPage={currentPage} totalPage={totalPages} />
      <Button
        text={">"}
        handler={handlePageNext}
        style={styles.pagination__btn}
      />
    </div>
  );
};

export default Pagination;
