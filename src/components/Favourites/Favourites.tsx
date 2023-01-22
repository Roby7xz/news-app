import { randomUUID } from 'crypto';
import { useEffect, useState } from 'react';
import uniqid from "uniqid";
import { LOCAL_STORAGE_KEY } from '../../utils/constants';
import { ArticleData } from '../../utils/types';
import Article from '../Articles/Article';

const Favourites = () => {

    const [bookmarks, setBookmarks] = useState<ArticleData[]>([]);

    useEffect(() => {
        const getLocalStorageData = () => {
            let data = localStorage.getItem(LOCAL_STORAGE_KEY);

            if (data === null) {
                setBookmarks([]);
            } else {
                setBookmarks(JSON.parse(data));
            }
        }

        getLocalStorageData();

    }, []);

    return (
        <div> Bookmarked article
            {
                bookmarks?.map((article: ArticleData, index: number) => {
                    return <Article key={uniqid()} article={article} />
                })
            }
        </div >
    )
}

export default Favourites;