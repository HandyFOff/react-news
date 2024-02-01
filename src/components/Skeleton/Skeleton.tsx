import { ISkeleton } from "../../interfaces";
import styles from "./Skeleton.module.scss";

const Skeleton: React.FC<ISkeleton> = ({ type, direction, count }) => {
  return type === "banner" ? (
    <div className={styles.skeletonBanner}></div>
  ) : type === "list" ? (
    <div
      className={
        direction === "list" ? styles.skeletonList : styles.skeletonGrid
      }
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={
            direction === "list" ? styles.skeletonItem : styles.skeletonBanner
          }
        ></div>
      ))}
    </div>
  ) : type === "categories" ? (
    <div className={styles.skeletonCategories}></div>
  ) : null;
};

export default Skeleton;
