import { AxiosConfig, BookmarksKey, Category } from "./types";


/*** Const ***/
const API_KEY = "1edf9d42b6bf4535ac6ddd75e17e2138";
const baseURL = "https://newsapi.org/v2";


/*** Exported Consts***/
export const categories: Category[] = [
    "Home",
    "General",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Technology"
];

export const defaultAxiosConfig: AxiosConfig = {
    url: "top-headlines",
    method: "GET",
    baseURL: baseURL,
    params: {
        language: "en",
        pageSize: 16,
        apiKey: API_KEY,
        category: null,
        q: null
    }
}

export const LOCAL_STORAGE_KEY: BookmarksKey = "bookmarks";


//top-headlines?language=en&apiKey=${API_KEY}&pageSize=16`

