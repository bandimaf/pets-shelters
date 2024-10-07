import React from "react";
import { useState } from 'react';


const AddFundReport = () => {
    return (
            <section>
                            <h1 className="auth__title title">Отчёт о полученных средствах</h1>
            <form className="auth__form">
            <label className="auth__input-label" for="pet-select">Сбор:</label>

                <select className="auth__select" name="pets" id="pet-select">
                    <option value="dog">Помогите леопольду</option>
                    <option value="cat">От 1 года до 3 лет</option>
                    <option value="cat">От 3 лет до 5 лет</option>
                    <option value="cat">От 5 до 8 лет</option>
                    <option value="cat">Старше 8 лет</option>
                </select>

                <label className="auth__input-label">
                    Дата
                    <input
                        className="auth__input"
                        placeholder="Введите логин"
                        type="date"
                        value={''}
                    />
                </label>
                <label className="auth__input-label">
                    Сумма
                    <input
                        className="auth__input"
                        placeholder="Введите число"
                        type="text"
                        value={''} />
                </label>
                <label className="auth__input-label">
                    Данные отправителя
                    <input
                        className="auth__input"
                        placeholder="Введите ФИО"
                        type="text"
                        value={''} />
                </label>
                <button className="auth__button">Добавить</button>
            </form>
            </section>
    );
}


export default AddFundReport;