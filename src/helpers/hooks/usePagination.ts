import { TOTAL_PAGES } from "../../constants";
import { TChangeFilter } from "./useFilters";

export const usePagination = ({
  changeFilter,
  currentPage,
}: {
  changeFilter: TChangeFilter;
  currentPage: number;
}) => {
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

  const handlePage = (index: number) => {
    changeFilter("page_number", index);
  };

  return { handleNextPage, handlePreviousPage, handlePage };
};
