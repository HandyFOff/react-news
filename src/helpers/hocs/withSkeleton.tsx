import React, { forwardRef } from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
import { ISkeleton } from "../../interfaces";

type ComponentType<P> = React.ComponentType<P>;

export const withSkeleton = <P,>(Component: ComponentType<P & ISkeleton>) =>
  forwardRef((props: P & ISkeleton, ref) => {
    if (props.isLoading)
      return (
        <Skeleton
          type={props.type}
          direction={props.direction}
          count={props.count}
        />
      );

    return <Component {...props} ref={ref} />;
  });
