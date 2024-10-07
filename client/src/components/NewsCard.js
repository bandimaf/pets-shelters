import React from "react";
import '../styles/global.css'
import '../styles/NewsFundCard.css'

import { NEWS_PAGE_ROUTE} from "../utils/consts";
const NewsCard = ({ news }) => {
    const path = 'http://localhost:9000/' + news.main_image
    return (
        <article className="donat-card card">
            <a href={NEWS_PAGE_ROUTE} className="card__link">
                <picture className="donat-card__picture">
                    <img src={path} alt="" class="card__img" />
                </picture>
                <div className="card__info">
                    <h5 className="card__title">{news.title}</h5>
                    <time className="card__time" datetime="2022-12-16T20:41">{news.date}</time>
                    <p className="card__description">{news.description}</p>
                    <p className="card__shelter">Приют «Тотошка»</p>
                </div>
            </a>
        </article>
    );
}


export default NewsCard;