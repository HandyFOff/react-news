import styles from "./Pagination.module.scss";
import Pages from "./Pages/Pages";
import Button from "../../ui/Button/Button";

import { setFilters } from "../../store/slices/newsSlice";
import { TOTAL_PAGES } from "../../constants";
import { useAppDispatch } from "../../store/hooks";

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

  const handlePage = (index: number) => {
    dispatch(setFilters({ key: "page_number", value: index + 1 }))
  };

  return (
    <div className={`${styles.pagination}`}>
      <Button
        text={"<"}
        handler={handlePagePrev}
        style={styles.pagination__btn}
      />
      <Pages currentPage={currentPage} totalPage={totalPages} handlePage={handlePage} />
      <Button
        text={">"}
        handler={handlePageNext}
        style={styles.pagination__btn}
      />
    </div>
  );
};

export default Pagination;
