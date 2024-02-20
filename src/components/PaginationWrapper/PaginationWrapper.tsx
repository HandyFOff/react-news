import Pagination, { IPagination } from "../Pagination/Pagination";

interface Props {
  top: boolean;
  bottom: boolean;
  children: React.ReactNode;
}

const PaginationWrapper: React.FC<Props & IPagination> = ({
  top,
  bottom,
  children,
  ...paginationProps
}) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
