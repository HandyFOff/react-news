import { TOTAL_PAGES } from "../../constants";

export const usePagination = ({ changeFilter, currentPage }) => {
  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
      changeFilter("page_number", (currentPage += 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      changeFilter("page_number", (currentPage -= 1));
    }
  };

  const handlePage = (index) => {
    changeFilter("page_number", index);
  };

  return { handleNextPage, handlePreviousPage, handlePage };
};
