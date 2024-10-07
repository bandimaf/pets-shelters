import React from "react";
import { useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/global.css'
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/Auth.css'
import FileInput from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/FileInput'

const AddPet = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (files) => {
        setSelectedFiles(files);
    };
    return (
        <section>
            <h1 className="auth__title title">Добавить подопечного</h1>
            <form className="auth__form">
                <label className="auth__input-label">
                    Имя
                    <input
                        className="auth__input"
                        placeholder="Введите назание статьи"
                        required
                        type="text"
                        value={''} />
                </label>
                <label className="auth__input-label" for="pet-select">Тип животного:</label>
                <select className="auth__select" name="pets" id="pet-select">
                    <option value="dog">Собака</option>
                    <option value="cat">Кошка</option>
                    <option value="cat">Другое</option>
                </select>

                <label className="auth__input-label" for="pet-select">Примерный возраст:</label>
                <select className="auth__select" name="pets" id="pet-select">
                    <option value="dog">До года</option>
                    <option value="cat">От 1 года до 3 лет</option>
                    <option value="cat">От 3 лет до 5 лет</option>
                    <option value="cat">От 5 до 8 лет</option>
                    <option value="cat">Старше 8 лет</option>
                </select>
                <label className="auth__input-label">
                    Дата поступления в приют
                    <input
                        className="auth__input"
                        required
                        type="date"
                        value={''} />
                </label>


                <label className="auth__input-label">
                    Описание
                    <textarea
                        className="auth__input"
                        placeholder="Введите содержание статьи"
                        required
                        type="text"
                        value={''} />
                </label>

                <div className="auth__files-block">
                    <label className="auth__input-label">
                        Добавить главное фото
                        <FileInput onFileSelectOne={handleFileSelection} />
                    </label>

                    <label className="auth__input-label">
                        Добавить дополнительные фото
                        <FileInput onFileSelectMore={handleFileSelection} />
                    </label>
                </div>

                <button className="auth__button">Добавить</button>
            </form>
        </section>
    );
}


export default AddPet;