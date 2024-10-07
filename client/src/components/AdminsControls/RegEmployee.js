import React from "react";

const RegEmployee = () => {
    return (
        <section>
            <h1 className="auth__title title">Регистрация сотрудника</h1>
            <form className="auth__form">
                <label className="auth__input-label" for="pet-select">Приют:</label>

                <select className="auth__select" name="pets" id="pet-select">
                    <option value="dog">Приют «Рыжий хвост»</option>
                    <option value="cat">От 1 года до 3 лет</option>
                    <option value="cat">От 3 лет до 5 лет</option>
                    <option value="cat">От 5 до 8 лет</option>
                    <option value="cat">Старше 8 лет</option>
                </select>

                <label className="auth__input-label">
                    Логин
                    <input
                        className="auth__input"
                        placeholder="Введите логин"
                        type="text"
                        value={''}
                    />
                </label>
                <label className="auth__input-label">
                    Пароль
                    <input
                        className="auth__input"
                        placeholder="Введите пароль"
                        type="password"
                        value={''} />
                </label>
                <button className="auth__button">Зарегистрировать</button>
            </form>

            <h1 className="auth__title title">Авторизация<br /> сотрудника</h1>
            <form className="auth__form">
                <label className="auth__input-label">
                    Логин
                    <input
                        className="auth__input"
                        placeholder="Введите логин"
                        type="text"
                        value={''}
                    />
                </label>
                <label className="auth__input-label">
                    Пароль
                    <input
                        className="auth__input"
                        placeholder="Введите пароль"
                        type="password"
                        value={''} />
                </label>
                <button className="auth__button">Войти</button>
            </form>
        </section>
    );
}


export default RegEmployee;