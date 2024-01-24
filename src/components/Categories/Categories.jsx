import Button from "../../ui/Button/Button";
import styles from "./Categories.module.scss";

const Categories = ({ categories, setCurrentCategory, currentCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <Button
            key={category}
            text={`${category[0].toUpperCase()}${category.slice(
              1,
              category.length
            )}`}
            style={`${styles.category} ${
              currentCategory === category && styles.active
            }`}
            handler={() => setCurrentCategory(category)}
          />
        );
      })}
    </div>
  );
};

export default Categories;
