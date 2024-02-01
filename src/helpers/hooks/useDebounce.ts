import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [keywords, setKeywords] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setKeywords(value), delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return keywords;
};
