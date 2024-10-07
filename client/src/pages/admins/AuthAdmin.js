import React from "react";
import { useContext, useState } from 'react';
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/global.css'
import '/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/styles/Auth.css'
import { observer } from "mobx-react-lite";
import { Route, Navigate } from "react-router-dom";
import {Context} from "/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/index.js";
import { ADMIN_ROUTE, PETS_ROUTE } from "../../utils/consts";
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from "/Users/alinabelik/Documents/Диплом/programm/pets-shelters/client/src/http/userAPI.js";

const AuthAdmin = observer(() => {
    const { user } = useContext(Context)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    const click = async () => {
        try {
            let data = await loginAdmin(login, password);
            user.setUser(user);
            user.setIsAuth(true);
            setRedirect(true);
            navigate({PETS_ROUTE});
        } catch (e) {
                alert("ты лох");
        }
    }
    
    

    return (
        <main className="auth">
            <h1 className="auth__title title">Регистрация<br /> администратора</h1>
            <form className="auth__form">
                <label className="auth__input-label">
                    Логин
                    <input
                        className="auth__input"
                        placeholder="Введите логин"
                        type="text"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </label>
                <label className="auth__input-label">
                    Пароль
                    <input
                        className="auth__input"
                        placeholder="Введите пароль"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <button
                    className="auth__button"
                    onClick={click}
                >Войти</button>
            </form>
        </main >
    );
})

export default AuthAdmin;