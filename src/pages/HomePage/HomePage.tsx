import { useEffect, useState } from 'react';
import { fetchNews } from '../../api/fetchNews';
import ArticleList from '../../components/Articles/ArticleList';
import Favourites from '../../components/Favourites/Favourites';
import { NewsResponse } from '../../utils/types';

const HomePage = () => {
    const [data, setData] = useState<NewsResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchNews();
            setData(fetchedData);
        }

        fetchData();
    }, []);

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
                <Favourites />
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ArticleList defaultData={data} />
            </div>
        </div >
    )
}

export default HomePage;