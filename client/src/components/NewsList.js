import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { Context } from "..";
import '../styles/global.css'
import '../styles/Listing.css';
import '../styles/AllLinks.css';
import { observer } from "mobx-react-lite";


const NewsList = observer (() => {
    const { news } = useContext(Context);
    return (
        <div className="listing__list">
            {news.news.map(news =>
                <NewsCard key={news.id} news={news} />
            )}
        </div>
    );
})


export default NewsList;