import { useEffect, useState } from "react";

interface IFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

type TFetchFunction<T, P> = (params?: P) => Promise<T>;

export const useFetch = <T, P>(
  fetchFunction: TFetchFunction<T, P>,
  params?: P
): IFetchResult<T> => {
  const [data, setData] = useState<T | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
