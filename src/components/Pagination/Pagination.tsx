import styles from "./Pagination.module.scss";
import Pages from "./Pages/Pages";
import Button from "../../ui/Button/Button";
import { usePagination } from "../../helpers/hooks/usePagination";

export interface IPagination {
  currentPage: number;
  changeFilter: () => void;
  totalPages: number;
}

const Pagination: React.FC<IPagination> = ({
  currentPage,
  changeFilter,
  totalPages,
}) => {
  const { handleNextPage, handlePreviousPage, handlePage } = usePagination({
    changeFilter,
    currentPage: currentPage,
  });

  return (
    <div className={`${styles.pagination}`}>
      <Button
        text={"<"}
        handler={handlePreviousPage}
        style={styles.pagination__btn}
      />
      <Pages
        currentPage={currentPage}
        handlePage={handlePage}
        totalPage={totalPages}
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
