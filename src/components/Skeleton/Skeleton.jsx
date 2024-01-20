import styles from "./Skeleton.module.scss";

const Skeleton = ({ type }) => {
  return type === "banner" ? (
    <div className={styles.skeletonBanner}></div>
  ) : (
    <div className={styles.skeletonList}></div>
  );
};

export default Skeleton;
