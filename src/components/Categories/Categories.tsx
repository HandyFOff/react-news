import React, { ForwardedRef, forwardRef } from "react";
import Button from "../../ui/Button/Button";
import styles from "./Categories.module.scss";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { CategoriesType } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  categories: CategoriesType[] | undefined;
}

const Categories: React.FC<Props> = forwardRef(
  ({ categories }, ref: ForwardedRef<HTMLDivElement | null>) => {
    const { category: currentCategory } = useAppSelector(
      (state) => state.newsSlice.filters
    );

    const fullCategories: CategoriesType[] | undefined = categories && [
      "all",
      ...categories,
    ];

    const dispatch = useAppDispatch();

    const formatedText = (category: CategoriesType) => {
      return `${category[0].toUpperCase()}${category.slice(
        1,
        category.length
      )}`;
    };

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
              handler={() =>
                dispatch(setFilters({ key: "category", value: category }))
              }
            />
          );
        })}
      </div>
    );
  }
);

const CategoriesSkeleton = withSkeleton<Props>(Categories);

export default CategoriesSkeleton;
