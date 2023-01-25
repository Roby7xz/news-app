import React from "react";

type Props = {
  title: string;
  publishedAt: string;
};

const LatestNewArticle = ({ title, publishedAt }: Props) => {
  const dateToTimeConverter = (publishedAt: string) => {
    const date = new Date(publishedAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let time = `${hours}:${minutes}`;

    if (minutes < 10) {
      time = `${hours}:0${minutes}`;
    }

    return time;
  };
  const timeOfPublishing = dateToTimeConverter(publishedAt);

  return (
    <div className="latest-news-article">
      <div className="publish-time">{timeOfPublishing}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default LatestNewArticle;
