import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../../api/fetchNews';
import { NewsResponse } from '../../utils/types';

type Props = {
    appCallback: (queryData: NewsResponse | undefined) => void;
}

const SearchBar = ({ appCallback }: Props) => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState<NewsResponse>();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/News by search?q=${query}`);

        const fetchQueryData = async () => {
            const fetchedData = await fetchNews(null, query);
            setData(fetchedData);
            appCallback(fetchedData);
        }

        fetchQueryData();
    };

    return (
        <div>
            <div className="wrapper">
                <h1>MyNews</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search news"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    { /*<Button route={`/search?q=${query}`} type="submit" disabled={!query}>Search</Button>*/}
                    <button type="submit" disabled={!query}>Search</button>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default SearchBar;