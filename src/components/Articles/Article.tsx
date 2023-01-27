import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { ArticleData, isBookmarked } from "../../utils/types";
import { LOCAL_STORAGE_KEY } from "../../utils/constants";
import { Bookmarked, unBookmarked } from "../../assets/svgExports";

type Props = {
  article: ArticleData;
  keyId?: number;
};

const Article = ({ article, keyId }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState<isBookmarked>(
    article.bookmarked
  );

  const [bookmarks, setBookmarks] = useState<ArticleData[]>(() => {
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data === null ? [] : JSON.parse(data);
  });

  const { author, title, url, urlToImage } = article;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
    window.dispatchEvent(new Event("storage"));
  }, [bookmarks]);

  const handleBookmark = (article: ArticleData) => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    let oldData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (oldData !== null) {
      let parsedData = JSON.parse(oldData);

      setBookmarks([...parsedData, { ...article, bookmarked: true }]);
    }
  };

  const handleUnBookmark = (title: string) => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    let oldData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (oldData !== null) {
      let parsedData = JSON.parse(oldData);
      setBookmarks(
        parsedData.filter((article: ArticleData) => article.title !== title)
      );
    }
  };

  return (
    <div className="article-card">
      <img className="article-img" src={urlToImage!} alt="ArticleImage.jpg" />
      <div className="article-body-footer-wrapper">
        <div className="article-card-body">
          <Link to={`${url}`}>{`${title.slice(0, 25)}...`}</Link>
          <Button
            className="bookmark-button"
            type="button"
            onClick={() =>
              isBookmarked ? handleUnBookmark(title) : handleBookmark(article)
            }
          >
            <img
              src={!isBookmarked ? unBookmarked : Bookmarked}
              alt="Bookmarked.svg"
            />
          </Button>
        </div>
        <div className="article-card-footer">
          {author !== null ? author : "Unknown Author"}
        </div>
      </div>
    </div>
  );
};

export default Article;
