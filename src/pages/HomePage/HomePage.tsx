import { useEffect, useState } from "react";
import { fetchNews } from "../../api/fetchNews";
import ArticleList from "../../components/Articles/ArticleList";
import Favourites from "../../components/Favourites/Favourites";
import { NewsResponse } from "../../utils/types";

const HomePage = () => {
  const [data, setData] = useState<NewsResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchNews();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className="article-list-wrapper">
      News
      <ArticleList defaultData={data} />
      <Favourites />
    </div>
  );
};

export default HomePage;
