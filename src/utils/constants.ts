import { AxiosConfig, Category } from "./types";


/*** Const ***/
const API_KEY = "7473cb85aa6a4d9b90f8a0296997cfa0";
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




//top-headlines?language=en&apiKey=${API_KEY}&pageSize=16`

