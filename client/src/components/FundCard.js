import React from "react";
import '../styles/global.css'
import '../styles/NewsFundCard.css'

import { FUND_PAGE_ROUTE} from "../utils/consts";
const FundCard = ({ fund }) => {
    return (
        <article className="donat-card card">
            <a href={FUND_PAGE_ROUTE} className="card__link">
                <picture className="donat-card__picture">
                    <img src={fund.main_image} alt="" class="card__img" />
                </picture>
                <div className="card__info">
                    <h5 className="card__title">{fund.title}</h5>
                    <time className="card__time" datetime="2022-12-16T20:41">{fund.date}</time>
                    <p className="card__description">{fund.description}</p>
                    <p className="card__shelter">Приют «Тотошка»</p>
                </div>
            </a>
        </article>
    );
}


export default FundCard;