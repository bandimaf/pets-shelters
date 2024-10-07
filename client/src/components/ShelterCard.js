import React from "react";
import '../styles/ShelterCard.css'
import { FUND_PAGE_ROUTE} from "../utils/consts";

const ShelterCard = ({ shelter }) => {

    return (
        <article class="shelter-card">
            <a href="shelter.html" class="shelter-card__link">
                <picture class="shelter-card__picture">
                    <img src={shelter.main_image} alt="" class="shelter-card__img" />
                </picture>
                <div class="shelter-card__info">
                    <h5 class="shelter-card__title card__title">Приют «Рыжий хвост</h5>
                    <p class="shelter-card__description">Ребята сегодня отлично поработали. Вольер Цезаря и Клепы привели в
                        порядок, все выдолбили и вывезли за территорию приюта. Хорошо поработав, попили сока с тортиком, который
                        для наших мужчин </p>
                    <p class="shelter-card__subtitle">Адрес</p>
                    <p class="shelter-card__description">г. Томск, ул. Ленина, д. 01</p>
                    <p class="shelter-card__subtitle">Контакты</p>
                    <div class="shelter-card__contacts">
                        <p class="shelter-card__description">Тел: 8 (800) 555 35-55</p>
                    </div>
                </div>
            </a>
        </article>
    );

}

export default ShelterCard;



