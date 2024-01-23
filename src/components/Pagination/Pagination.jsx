import styles from "./Pagination.module.scss";
import Pages from "./Pages/Pages";
import Button from "../../ui/Button/Button";

const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
  const handlePage = (index) => {
    setCurrentPage(index);
  };

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage((prev) => (prev += 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev -= 1));
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        text={"<"}
        handler={handlePreviousPage}
        style={styles.pagination__btn}
      />
      <Pages
        handlePage={handlePage}
        currentPage={currentPage}
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
