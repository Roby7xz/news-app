import axios from "axios";
import { defaultAxiosConfig as AxiosConfig } from "../utils/constants";
import { Category, NewsResponse } from "../utils/types";

export const fetchNews = async (category?: Category | null, q?: string | null) => {

    const modifiedAxiosConfig = {
        ...AxiosConfig,
        params: {
            ...AxiosConfig.params,
            category: category, q: q
        }
    };

    try {
        const response = await axios(modifiedAxiosConfig);
        const fetchedData: NewsResponse = response.data.articles;
        return fetchedData;
    } catch (error) {
        console.log(error);
    }
};

export const fetchLatestNews = async () => {
    /* const PSAxiosConfig = { ...AxiosConfig, params: { ...AxiosConfig.params, pageSize:  } };
 
     try {
         const response = await axios(queryAxiosConfig);
         const { data } = response;
     } catch (error) {
         console.log(error);
     }*/
}