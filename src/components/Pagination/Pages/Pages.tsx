import { useAppDispatch } from "../../../store";
import { setFilters } from "../../../store/slices/newsSlice";
import Button from "../../../ui/Button/Button";
import styles from "./Pages.module.scss";

interface Props {
  currentPage: number;
  totalPage: number;
}

const Pages: React.FC<Props> = ({ currentPage, totalPage }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.pagination__pages}>
      {[...Array(totalPage)].map((_, index) => {
        return (
          <Button
            key={index}
            text={index + 1}
            handler={() =>
              dispatch(setFilters({ key: "page_number", value: index + 1 }))
            }
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
