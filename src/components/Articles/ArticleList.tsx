import { useEffect, useState } from "react";
import { NewsResponse } from "../../utils/types";
import Article from "./Article";

type Props = {
    defaultData?: NewsResponse,
    categoriesData?: NewsResponse,
    searchData?: NewsResponse
}

const ArticleList = ({ defaultData, categoriesData, searchData }: Props) => {

    const [dataTypes, setDataTypes] = useState<NewsResponse>();

    useEffect(() => {
        if (categoriesData) {
            setDataTypes(categoriesData);
        }

        if (searchData) {
            setDataTypes(searchData);
        }

        if (defaultData) {
            setDataTypes(defaultData);
        }
    }, [defaultData, categoriesData, searchData])

    return (
        <div>
            {
                dataTypes?.map((article: any, index: number) => {
                    return <Article key={index} article={article} />
                })
            }
        </div>
    )
}

export default ArticleList;