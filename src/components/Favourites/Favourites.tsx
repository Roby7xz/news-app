import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../utils/constants";
import { ArticleData } from "../../utils/types";
import Article from "../Articles/Article";

const Favourites = () => {
  const [bookmarks, setBookmarks] = useState<ArticleData[]>(() => {
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data === null ? [] : JSON.parse(data);
  });

  useEffect(() => {
    const getData = () => {
      let data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data === null) {
        setBookmarks([]);
      } else {
        setBookmarks(JSON.parse(data));
      }
    };

    window.addEventListener("storage", getData);

    return () => window.removeEventListener("storage", getData);
  }, []);

  



  return (
    <div className="favourites">
      <h5>Favourites</h5>
      <div className="favourites-list">
        {bookmarks?.map((article: ArticleData, index: number) => {
          return <Article key={article.title + index} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Favourites;
