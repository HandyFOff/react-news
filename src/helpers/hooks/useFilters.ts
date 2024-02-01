import { useState } from "react";

export type TChangeFilter = (key?: string, value?: string | number) => void;

export const useFilters = <T>(initialFilters: T) => {
  const [filters, setFilters] = useState<T>(initialFilters);

  const changeFilter = (key?: string, value?: string | number) => {
    if (key && value) {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  };

  return { filters, changeFilter };
};
