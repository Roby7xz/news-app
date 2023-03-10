import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNewsByQuery } from "../../api/fetchNews";
import { NewsResponse } from "../../utils/types";
import { Search } from "../../assets/svgExports";

type Props = {
  isMobileScreen: boolean;
  appCallback: (queryData: NewsResponse | undefined) => void;
};

const SearchBar = ({ isMobileScreen, appCallback }: Props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/News by search?q=${query}`);

    const fetchQueryData = async () => {
      const fetchedData = await fetchNewsByQuery(query);
      appCallback(fetchedData);
      setQuery("");
    };

    fetchQueryData();
  };

  return (
    <>
      <div className="wrapper">
        {isMobileScreen ? null : (
          <div>
            <span className="title-first-span">My</span>
            <span className="title-second-span">News</span>
          </div>
        )}
        <form className="search-bar-form-wrapper" onSubmit={handleSubmit}>
          <img src={Search} alt="Search.svg" />
          <input
            className="input-text-field"
            type="text"
            placeholder="Search news"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isMobileScreen ? null : (
            <button className="button-search" type="submit">
              SEARCH
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
