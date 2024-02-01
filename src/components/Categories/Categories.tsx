import React, { ForwardedRef, forwardRef } from "react";
import { useCategories } from "../../helpers/hooks/useCategories";
import Button from "../../ui/Button/Button";
import styles from "./Categories.module.scss";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[] | undefined;
  changeFilter: () => void;
  currentCategory: CategoriesType;
}

const Categories: React.FC<Props> = forwardRef(
  (
    { categories, changeFilter, currentCategory },
    ref: ForwardedRef<HTMLDivElement | null>
  ) => {
    const { formatedText, handleCurrentCategory } = useCategories(changeFilter);
    const fullCategories: CategoriesType[] | undefined = categories && [
      "all",
      ...categories,
    ];

    return (
      <div className={styles.categories} ref={ref}>
        {fullCategories?.map((category) => {
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

const CategoriesSkeleton = withSkeleton<Props>(Categories);

export default CategoriesSkeleton;
