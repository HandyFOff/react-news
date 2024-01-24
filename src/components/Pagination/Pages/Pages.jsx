import Button from "../../../ui/Button/Button";
import styles from "./Pages.module.scss";

const Pages = ({ currentPage, totalPage, setCurrentPage }) => {
  const handlePage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className={styles.pagination__pages}>
      {[...Array(totalPage)].map((_, index) => {
        return (
          <Button
            key={index}
            text={index + 1}
            handler={() => handlePage(index + 1)}
            disabled={currentPage === index + 1 ? true : false}
            style={`${styles.pagination__page} ${
              currentPage === index + 1 ? styles.pagination__page_active : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export default Pages;
