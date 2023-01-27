import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import FilterList from "./components/Filters/FilterList";
import LatestNews from "./components/LatestNews/LatestNews";
import { NewsResponse } from "./utils/types";
import { useEffect, useState } from "react";

function App() {
  const [searchData, setSearchData] = useState<NewsResponse>();
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    window.innerWidth < 950
  );

  const handleCallback = (queryData: NewsResponse | undefined) => {
    setSearchData(queryData);
  };

  const updateScreenSize = () => {
    setIsMobileScreen(window.innerWidth < 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  return (
    <>
      <NavBar isMobileScreen={isMobileScreen} />
      <div className="container">
        <SearchBar appCallback={handleCallback} />
        <div className="inner-container">
          <FilterList />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/:categoryName"
              element={<CategoryPage searchData={searchData} />}
            />
          </Routes>
          <LatestNews />
        </div>
      </div>
    </>
  );
}

export default App;
