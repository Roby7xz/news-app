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
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data === null) {
      setBookmarks([]);
    } else {
      setBookmarks(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      Favourites
      {bookmarks?.map((article: ArticleData, index: number) => {
        return <Article key={article.title + index} article={article} />;
      })}
    </div>
  );
};

export default Favourites;
