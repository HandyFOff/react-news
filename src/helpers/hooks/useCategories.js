export const useCategories = (changeFilter) => {
  const handleCurrentCategory = (category) => {
    changeFilter("page_number", 1);
    changeFilter("category", category);
  };

  const formatedText = (category) => {
    return `${category[0].toUpperCase()}${category.slice(1, category.length)}`;
  };

  return { handleCurrentCategory, formatedText };
};
