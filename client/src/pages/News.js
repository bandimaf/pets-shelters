import React, { useContext, useEffect } from "react";
import NewsList from "../components/NewsList";
import '../styles/global.css'
import { Context } from "..";
import { fetchNews } from "../http/newsAPI";


const News = () => {
    const {news} = useContext(Context)

        useEffect(() => {
        fetchNews().then(data => {
            news.setNews(data.rows)
        })
    }, [ ])
    console.log(news)
    
    return (
        <main>
            <div className="listing__container">
                <h2 className="listing__title title">Новости</h2>
                <NewsList />
            </div>
        </main>
    );
}


export default News;