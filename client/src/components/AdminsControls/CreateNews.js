import React from "react";
import { useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/global.css'
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/Auth.css'
import FileInput from '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/components/FileInput'

const CreateNews = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelection = (files) => {
        setSelectedFiles(files);
    };
    return (
        <section>
            <h1 className="auth__title title">Создать новость</h1>
            <form className="auth__form">
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

                <button className="auth__button">Создать</button>
            </form>
        </section>
    );
}


export default CreateNews;