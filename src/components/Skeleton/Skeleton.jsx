import styles from "./Skeleton.module.scss";

const Skeleton = ({ type }) => {
  return type === "banner" ? (
    <div className={styles.skeletonBanner}></div>
  ) : type === "list" ? (
    <div className={styles.skeletonList}>
      {[...Array(30)].map((_, index) => (
        <div key={index} type={"item"} className={styles.skeletonItem}></div>
      ))}
    </div>
  ) : type === "categories" ? (
    <div className={styles.skeletonCategories}></div>
  ) : null;
};

export default Skeleton;