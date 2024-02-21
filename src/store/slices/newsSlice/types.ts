import { IFilters, INews } from "../../../interfaces";

export interface NewsSlice {
  news: INews[];
  filters: IFilters;
}

export interface SetFilters {
  key: string;
  value: string | number | null;
}