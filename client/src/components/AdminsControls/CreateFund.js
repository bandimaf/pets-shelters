import React from "react";
import { useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/global.css'
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/Auth.css'
import FileInput from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/FileInput'

const CreateFund = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (files) => {
        setSelectedFiles(files);
    };
    return (
        <form className="auth__form">
            <h1 className="auth__title title">Объявить сбор</h1>
            <label className="auth__input-label">
                Заголовок
                <input
                    className="auth__input"
                    placeholder="Введите назание статьи"
                    required
                    type="text"
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
            <label className="auth__input-label">
                Необходимая сумма, ₽
                <input
                    className="auth__input"
                    placeholder="Введите число"
                    required
                    type="text"
                    value={''} />
            </label>
            <label className="auth__input-label" for="pet-select">Цель сбора:</label>

            <select className="auth__select" name="pets" id="pet-select">
                <option value="dog">Помощь подопечным</option>
                <option value="cat">Содержание приюта</option>
            </select>
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

            <button className="auth__button">Объявить сбор</button>
        </form>
    );
}


export default CreateFund;