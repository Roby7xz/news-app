import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { ArticleData, isBookmarked, NewsResponse } from '../../utils/types';
import { LOCAL_STORAGE_KEY } from '../../utils/constants';
import { Bookmarked, unBookmarked } from "../../assets/svgExports";

type Props = {
  article: ArticleData;
}

const Article = ({ article }: Props) => {
  const [isBookmarked, setIsBookmarked] = useState<isBookmarked>(article.bookmarked);
  const [bookmarks, setBookmarks] = useState<ArticleData[]>(() => {
    let data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data === null ? [] : JSON.parse(data);
  });

  const { source, author, title, description, url, urlToImage, publishedAt, content } = article;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks])

  function handleBookmark(article: ArticleData) {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    let oldData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (oldData === null) {
      setBookmarks([]);
    } else {
      const parsedData = JSON.parse(oldData);
      setBookmarks([...parsedData, { ...article, bookmarked: true }]);
    }
  }

  const handleUnBookmark = (title: string) => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    let oldData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (oldData === null) {
      setBookmarks([]);
    } else {
      const parsedData = JSON.parse(oldData);

      setBookmarks(parsedData.filter((article: ArticleData) => article.title !== title));
    }

  }

  return (
    <div className="card">
      {title}
      <Button
        className="bookmark-button"
        type="button"
        onClick={() => isBookmarked ? handleUnBookmark(title) : handleBookmark(article)}>
        <img src={!isBookmarked ? unBookmarked : Bookmarked} alt="Bookmarked.svg" />
      </Button>
    </div>
  )
}

export default Article;

