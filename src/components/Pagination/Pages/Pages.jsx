import styles from "./Pages.module.scss";

const Pages = ({ currentPage, handlePage, totalPage }) => {
  return (
    <div className={styles.pagination__pages}>
      {[...Array(totalPage)].map((_, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`${styles.pagination__page} ${
              currentPage === index + 1 ? styles.pagination__page_active : ""
            }`}
            onClick={() => handlePage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pages;
