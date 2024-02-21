import { CategoriesType } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { setFilters } from "../../store/slices/newsSlice";

export const useCategories = () => {
  const dispatch = useAppDispatch();

  const changeCategory = (category: CategoriesType) => {
    dispatch(setFilters({ key: "category", value: category }));
  };

  const formatedText = (category: CategoriesType) => {
    return `${category[0].toUpperCase()}${category.slice(1, category.length)}`;
  };

  return { formatedText, changeCategory };
};
