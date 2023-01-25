export type ArticleData = {
  bookmarked: boolean; // Added
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

export type AxiosConfig = {
  url: string;
  method: string;
  baseURL: string;
  params: {
    apiKey: string;
    language: string;
    pageSize?: number;
    page?: number;
    sortBy?: string | null;
    category?: string | null;
    q?: string | null;
  };
};

export type NewsResponse = [ArticleData[]];

export type isBookmarked = boolean;

export type BookmarksKey = string;

export type Category =
  | "Home"
  | "Business"
  | "General"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";

export type ButtonType = "submit" | "reset" | "button";
