import React from 'react';
import { ArticleData } from '../../utils/types';
import Button from '../Button/Button';

type Props = {
  article: ArticleData
}

const Article = ({ article }: Props) => {

  const { source, author, title, description, url, urlToImage, publishedAt, content } = article;

  return (
    <div>{title}
      <Button type="button">Bookmark</Button>
    </div>
  )
}

export default Article;