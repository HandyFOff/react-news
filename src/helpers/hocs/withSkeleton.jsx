import Skeleton from "../../components/Skeleton/Skeleton";

export const withSkeleton = (Component) => (props) => {
  if (props.isLoading)
    return (
      <Skeleton
        type={props.type}
        direction={props.direction}
        count={props.count}
      />
    );

  return <Component {...props} />;
};
