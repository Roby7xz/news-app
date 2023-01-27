import { AxiosConfig, BookmarksKey, Category } from "./types";

/*** Const ***/
const API_KEY = "7cca09a4e5d34f31a99f97b67ae7423f";
const baseURL = "https://newsapi.org/v2";

/*** Exported Consts***/
export const categories: Category[] = [
  "Home",
  "General",
  "Business",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "News by search",
];

export const defaultAxiosConfig: AxiosConfig = {
  url: "top-headlines",
  method: "GET",
  baseURL: baseURL,
  params: {
    language: "en",
    pageSize: 16,
    apiKey: API_KEY,
  },
};

export const categoryAxiosConfig: AxiosConfig = {
  url: "top-headlines",
  method: "GET",
  baseURL: baseURL,
  params: {
    language: "en",
    pageSize: 16,
    apiKey: API_KEY,
    category: null,
  },
};

export const queryAxiosConfig: AxiosConfig = {
  url: "everything",
  method: "GET",
  baseURL: baseURL,
  params: {
    language: "en",
    pageSize: 16,
    apiKey: API_KEY,
    q: null,
  },
};

export const infiniteScrollAxiosConfig: AxiosConfig = {
  url: "everything?q=all&searchIn=title",
  method: "GET",
  baseURL: baseURL,
  params: {
    language: "en",
    pageSize: 5,
    page: 1,
    apiKey: API_KEY,
    sortBy: "publishedAt",
  },
};

export const LOCAL_STORAGE_KEY: BookmarksKey = "bookmarks";

//top-headlines?language=en&apiKey=${API_KEY}&pageSize=16`
