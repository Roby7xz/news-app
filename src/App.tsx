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
    window.innerWidth <= 750
  );
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleCallback = (queryData: NewsResponse | undefined) => {
    setSearchData(queryData);
  };

  const updateScreenSize = () => {
    setIsMobileScreen(window.innerWidth <= 750);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const handleShowMenu = () => {
    if (isMobileScreen) {
      setShowMenu((prevState) => !prevState);
    }

    if (window.innerWidth > 751) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <NavBar
        isMobileScreen={isMobileScreen}
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
      />
      <div className="container">
        <SearchBar
          isMobileScreen={isMobileScreen}
          appCallback={handleCallback}
        />
        <>
          {isMobileScreen && showMenu ? (
            <FilterList />
          ) : (
            <div className="inner-container">
              <FilterList isMobileScreen={isMobileScreen} />
              <Routes>
                <Route
                  path="/"
                  element={<HomePage isMobileScreen={isMobileScreen} />}
                />
                <Route
                  path="/:categoryName"
                  element={<CategoryPage searchData={searchData} />}
                />
              </Routes>
              <LatestNews isMobileScreen={isMobileScreen} />
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default App;
