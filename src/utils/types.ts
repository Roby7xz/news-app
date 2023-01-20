export type ArticleData = {
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

export type NewsResponse = [
    ArticleData[]
];

export type AxiosConfig = {
    url: string;
    method: string;
    baseURL: string;
    params: {
        language: string;
        pageSize: number;
        apiKey: string;
        category?: string | null;
        q?: string | null;
    }
};

export type Debounce = {
    value: string;
    delayTime: number;
}

export type Category = "Home" | "Business" | "General" | "Health" | "Science" | "Sports" | "Technology";

export type ButtonType = "submit" | "reset" | "button";



