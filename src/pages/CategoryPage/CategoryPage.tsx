import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleList from "../../components/Articles/ArticleList";
import { categories } from "../../utils/constants";
import { Category, NewsResponse } from "../../utils/types";
import { fetchNewsByCategory } from "../../api/fetchNews";

type Params = {
  categoryName: Category;
};

type Props = {
  searchData: NewsResponse | undefined;
};

const CategoryPage = ({ searchData }: Props) => {
  const [data, setData] = useState<NewsResponse>();
  const { categoryName } = useParams<Params>();
  const navigate = useNavigate();

  const categoryExists = categories.find(
    (category) => category === categoryName
  );

  useEffect(() => {
    if (categoryExists) {
      const fetchData = async () => {
        if (categoryName === "Home") {
          // On route /Home default category is General and it's re-routed on "/" route
          const fetchedData = await fetchNewsByCategory("General");
          navigate("/");
          setData(fetchedData);
        } else if (categoryName === "News by search") {
          setData(searchData);
        } else {
          const fetchedData = await fetchNewsByCategory(categoryName!);
          navigate(`/${categoryName}`);
          setData(fetchedData);
        }
      };

      fetchData();
    }
  }, [categoryName, categoryExists, searchData, navigate]);

  return (
    <div className="article-list-wrapper">
      {categoryName === "Home" ? "News" : categoryName}
      <ArticleList categoriesData={data} searchData={searchData} />
    </div>
  );
};

export default CategoryPage;
