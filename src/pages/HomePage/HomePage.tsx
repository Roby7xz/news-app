import { useEffect, useState } from "react";
import { fetchNews } from "../../api/fetchNews";
import ArticleList from "../../components/Articles/ArticleList";
import Button from "../../components/Button/Button";
import Favourites from "../../components/Favourites/Favourites";
import LatestNews from "../../components/LatestNews/LatestNews";
import { NewsResponse } from "../../utils/types";

type Props = {
  isMobileScreen: boolean;
};

const HomePage = ({ isMobileScreen }: Props) => {
  const [data, setData] = useState<NewsResponse>();
  const [isActive, setIsActive] = useState({
    featured: true,
    latest: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchNews();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <div className="article-list-wrapper">
        {isMobileScreen ? (
          <div className="mobile-buttons">
            <Button
              type="button"
              className={`${
                isActive.featured ? "button-mobile-active" : "button-mobile"
              }`}
              onClick={() => setIsActive({ featured: true, latest: false })}
            >
              Featured
            </Button>
            <Button
              type="button"
              className={`${
                isActive.latest ? "button-mobile-active" : "button-mobile"
              }`}
              onClick={() => setIsActive({ featured: false, latest: true })}
            >
              Latest
            </Button>
          </div>
        ) : (
          "News"
        )}
        <>
          {isMobileScreen ? (
            isActive.featured ? (
              <>
                <ArticleList defaultData={data} />
                <Favourites />
              </>
            ) : (
              <LatestNews />
            )
          ) : (
            <ArticleList defaultData={data} />
          )}
        </>
      </div>
      {isMobileScreen ? null : <Favourites />}
    </div>
  );
};

export default HomePage;
