import axios from "axios";
import {
  defaultAxiosConfig,
  categoryAxiosConfig,
  queryAxiosConfig,
  infiniteScrollAxiosConfig,
} from "../utils/constants";
import { Category, NewsResponse } from "../utils/types";

export const fetchNews = async () => {
  try {
    const response = await axios(defaultAxiosConfig);
    const fetchedData: NewsResponse = response.data.articles;
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsByCategory = async (category: Category) => {
  try {
    const response = await axios({
      ...categoryAxiosConfig,
      params: { ...categoryAxiosConfig.params, category: category },
    });
    const fetchedData: NewsResponse = response.data.articles;
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsByQuery = async (query: string) => {
  try {
    const response = await axios({
      ...queryAxiosConfig,
      params: { ...queryAxiosConfig.params, q: query },
    });
    const fetchedData: NewsResponse = response.data.articles;
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLatestNews = async (pageSize: number) => {
  // For infinite scroll
  try {
    const response = await axios({
      ...infiniteScrollAxiosConfig,
      params: { ...infiniteScrollAxiosConfig.params, pageSize: pageSize },
    });
    const fetchedData: NewsResponse = response.data.articles;
    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};
