import { Routes, Route, Navigate, useParams, Params } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FilterList from './components/Filters/FilterList';
import LatestNews from './components/LatestNews/LatestNews';
import { NewsResponse } from './utils/types';
import { useState } from 'react';


function App() {
  const [searchData, setSearchData] = useState<NewsResponse>();

  const handleCallback = (queryData: NewsResponse | undefined) => {
    setSearchData(queryData);
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <SearchBar appCallback={handleCallback} />
        <div className="filter-page-wrapper">
          <FilterList />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:categoryName" element={<CategoryPage searchData={searchData} />} />
            {
              //<Route path="*" element={<Navigate to="/" />} />
            }
          </Routes>
          <LatestNews />
        </div>
      </div>
    </>
  );
}

export default App;
