import React, { useContext } from "react";
import '../styles/global.css'
import { Context } from "../index";
import '../styles/NavBar.css'
import logo from '../assets/svg-sprite/paws.svg'
import { ADMIN_ROUTE, FUNDS_ROUTE, MAIN_PAGE, NEWS_ROUTE, PETS_ROUTE, SHELTERS_ROUTE, VOLUNTEERS_ROUTE } from "../utils/consts"
import NavLogo from "./svg/NavLogo";
import { observer } from "mobx-react-lite";



const NavBar = observer(() => {
    const { user } = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (

        <header className="page-header">
            <div className="page-header__container">
                <a href={MAIN_PAGE} className="page-header__logo">
                    <svg width="193px" height="135px">
                        <NavLogo />
                    </svg>
                </a>
                <nav className="page-header__nav">
                    <a href={PETS_ROUTE} className="page-header__link">подопечные</a>
                    <a href={SHELTERS_ROUTE} className="page-header__link">приюты</a>
                    <a href={FUNDS_ROUTE} className="page-header__link">сбор средств</a>
                    <a href={NEWS_ROUTE} className="page-header__link">новости</a>
                    {/* <a href={VOLUNTEERS_ROUTE} className="page-header__link">стать волонтёром</a> */}
                    {user.isAuth ?
                        <div>
                            <button
                                onClick={() => logOut()}
                            >
                                Выйти
                            </button>
                            <a href={ADMIN_ROUTE} className="page-header__link">Админ панель</a>
                        </div>
                        : <p></p>
                        }
                </nav>
            </div>
        </header>
    );
})


export default NavBar;