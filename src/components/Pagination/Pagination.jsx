import styles from "./Pagination.module.scss";
import Pages from "./Pages/Pages";
import Button from "../../ui/Button/Button";
import { usePagination } from "../../helpers/hooks/usePagination";

const Pagination = ({ currentPage, changeFilter, totalPage }) => {
  const { handleNextPage, handlePreviousPage, handlePage } = usePagination({
    changeFilter,
    currentPage,
  });

  return (
    <div className={styles.pagination}>
      <Button
        text={"<"}
        handler={handlePreviousPage}
        style={styles.pagination__btn}
      />
      <Pages
        currentPage={currentPage}
        handlePage={handlePage}
        totalPage={totalPage}
      />
      <Button
        text={">"}
        handler={handleNextPage}
        style={styles.pagination__btn}
      />
    </div>
  );
};

export default Pagination;
