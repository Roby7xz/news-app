import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNews } from "../../api/fetchNews";
import ArticleList from "../../components/Articles/ArticleList";
import { categories } from "../../utils/constants";
import { Category, NewsResponse } from "../../utils/types";


type Params = {
    categoryName: Category
}

type Props = {
    searchData: NewsResponse | undefined
}

const CategoryPage = ({ searchData }: Props) => {
    const [data, setData] = useState<NewsResponse>();
    const { categoryName } = useParams<Params>();
    const navigate = useNavigate();

    const categoryExists = categories.find((category) => category === categoryName);

    useEffect(() => {
        if (categoryExists) {
            const fetchData = async () => {
                if (categoryName === "Home") { // On route /Home , default category: General and re-routed on "/" route
                    const fetchedData = await fetchNews("General", null);
                    navigate("/Home");
                    setData(fetchedData);
                } else {
                    const fetchedData = await fetchNews(categoryName, null);
                    setData(fetchedData);
                }
            }

            fetchData();
        }
    }, [categoryName, categoryExists, navigate]);

    return (
        <div>
            {categoryName}
            <ArticleList categoriesData={data} searchData={searchData} />
        </div>
    )

}

export default CategoryPage;