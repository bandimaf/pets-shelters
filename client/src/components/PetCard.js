import React from "react";
import '../styles/global.css'
import '../styles/PetCard.css'
import '../styles/AllLinks.css';

import { PET_PAGE_ROUTE } from "../utils/consts";
import { observe } from "mobx";
import { Context } from "..";

const PetCard = ({ pet }) => {
    const path = 'http://localhost:9000/' + pet.main_image
    console.log(pet)
    return (
        <article className="pet-card">
            <a className="pet-card__link" href={PET_PAGE_ROUTE}>
                <picture className="pet-card__picture">
                    <img className="pet-card__img" src= {path} alt=""/>
                </picture>
                <h5 className="pet-card__name">{pet.name}</h5>
                <div className="pet-card__description">
                    <div className="pet-card__about">
                        <p className="pet-card__gender" gender="Пол:">{pet.gender}</p>
                        <p className="pet-card__age" age="Возраст:">{pet.age} лет</p>
                    </div>
                    <p className="pet-card__city" city="г.">Томск</p>
                    <p className="pet-card__shelter">«Рыжий хвост»</p>
                </div>
            </a>
        </article>
    );
}


export default PetCard;