import React, { forwardRef } from "react";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { useCategories } from "../../helpers/hooks/useCategories";
import Button from "../../ui/Button/Button";
import styles from "./Categories.module.scss";

const Categories = forwardRef(
  ({ categories, changeFilter, currentCategory }, ref) => {
    const { formatedText, handleCurrentCategory } = useCategories(changeFilter);
    const fullCategories = ["All", ...categories];

    return (
      <div className={styles.categories} ref={ref}>
        {fullCategories.map((category) => {
          const title = formatedText(category);
          return (
            <Button
              key={category}
              text={title}
              style={`${styles.category} ${
                currentCategory === category && styles.active
              }`}
              handler={() => handleCurrentCategory(category)}
            />
          );
        })}
      </div>
    );
  }
);

const CategoriesSkeleton = withSkeleton(Categories);

export default CategoriesSkeleton;
