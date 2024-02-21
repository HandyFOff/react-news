import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Categories.module.scss";
import { withSkeleton } from "../../helpers/hocs/withSkeleton";
import { CategoriesType } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

interface Props {
  categories: CategoriesType[] | undefined;
}

const Categories: React.FC<Props> = forwardRef(
  ({ categories }, ref: ForwardedRef<HTMLDivElement | null>) => {
    const { category: currentCategory } = useAppSelector(
      (state) => state.newsSlice.filters
    );

    return (
      <div className={styles.categories} ref={ref}>
        {categories?.map((category) => {
          return (
            <CategoriesItem
              key={category}
              category={category}
              currentCategory={currentCategory}
            />
          );
        })}
      </div>
    );
  }
);

const CategoriesSkeleton = withSkeleton<Props>(Categories);

export default CategoriesSkeleton;
