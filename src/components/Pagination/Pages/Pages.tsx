import Button from "../../../ui/Button/Button";
import styles from "./Pages.module.scss";

interface Props {
  currentPage: number;
  totalPage: number;
  handlePage: (index: number) => void;
}

const Pages: React.FC<Props> = ({ currentPage, totalPage, handlePage }) => {
  return (
    <div className={styles.pagination__pages}>
      {[...Array(totalPage)].map((_, index) => {
        
        return (
          <Button
            key={index}
            text={index + 1}
            handler={() => handlePage(index)}
            disabled={currentPage === index + 1 ? true : false}
            style={`${styles.pagination__page} ${
              currentPage === index + 1 && styles.pagination__page_active
            }`}
          />
        );
      })}
    </div>
  );
};

export default Pages;
