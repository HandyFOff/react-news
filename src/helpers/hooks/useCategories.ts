import { CategoriesType } from "../../interfaces";

export const useCategories = (
  changeFilter: (key: string, value: number | string | null) => void
) => {
  const handleCurrentCategory = (category: CategoriesType) => {
    changeFilter("page_number", 1);
    changeFilter("category", category);
  };

  const formatedText = (category: CategoriesType) => {
    return `${category[0].toUpperCase()}${category.slice(1, category.length)}`;
  };

  return { handleCurrentCategory, formatedText };
};
