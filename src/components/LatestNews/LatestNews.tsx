import React, { useEffect, useState, useRef } from "react";
import { NewsResponse } from "../../utils/types";
import { fetchLatestNews } from "../../api/fetchNews";
import LatestNewArticle from "./LatestNewArticle";
import { RedDot } from "../../assets/svgExports";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState<NewsResponse>();
  const [pageSize, setPageSize] = useState<number>(5);
  const scrollElement = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    const height = scrollElement.current!.scrollHeight;
    const top = scrollElement.current!.scrollTop;
    const winHeight = scrollElement.current!.clientHeight;

    if (winHeight + top + 2 >= height) {
      setPageSize((prevState) => prevState + 3);
    }
  };

  useEffect(() => {
    const fetchData = async (pageSize: number) => {
      const fetchedData = await fetchLatestNews(pageSize);
      setLatestNews(fetchedData);
    };

    fetchData(pageSize);
  }, [pageSize]);

  useEffect(() => {
    scrollElement.current!.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="latest-news-wrapper">
      <div className="latest-news-header">
        <img src={RedDot} alt="RedDot.svg" />
        <h4>Latest News</h4>
      </div>
      <div ref={scrollElement} className="latest-news-articles">
        {latestNews?.map((data: any, index: number) => {
          return (
            <LatestNewArticle
              key={index + 1}
              title={data.title}
              publishedAt={data.publishedAt}
            />
          );
        })}
      </div>
      <div>
        <div className="latest-news-footer">See all news</div>
      </div>
    </div>
  );
};

export default LatestNews;
