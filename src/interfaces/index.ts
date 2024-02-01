export interface INews {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: CategoriesType[];
  published: string;
}

export interface ISkeleton {
  isLoading?: boolean;
  type: SkeletonType;
  direction: SkeletonDirection;
  count: number;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType;
  keywords: string;
}

export type IFetchProperties = Partial<IFilters>


export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export type SkeletonType = "banner" | "item" | "list" | "categories";
export type SkeletonDirection = "list" | "grid"

export type CategoriesType =
  | "all"
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
