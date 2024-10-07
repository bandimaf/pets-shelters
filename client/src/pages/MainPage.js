import React, { useContext, useEffect } from "react";
import PetsList from "../components/PetsList";
import FundList from "../components/FundList";
import { PETS_ROUTE, FUNDS_ROUTE } from "../utils/consts";
import Logo from "../components/svg/Logo";
import '../styles/MainPage.css'
import '../styles/global.css'
import '../styles/PetsListing.css'
import { Context } from "..";
import { observer } from "mobx-react-lite";
import NewsList from "../components/NewsList";
import Arrow from "../components/svg/Arrow";
import BankDetailsList from "../components/BankDetailsList";
import { fetchNews } from "../http/newsAPI";
import { fetchPets } from "../http/petsApi";


const MainPage = observer(() => {

    const {pet} = useContext(Context)

    useEffect(() => {
        fetchPets().then(data => {
            pet.setPet(data.rows)
        })
    }, [ ])

    const { news } = useContext(Context)

    useEffect(() => {
        fetchNews().then(data => {
            news.setNews(data.rows)
        })
    }, [])
    return (
        <main className="main-page">
            <div className="main-page__logo-container">
                <p className="main-page__logo-title">Четыре лапы и хвост — это верность, преданность и любовь на всю жизнь</p>
                <Logo />
            </div>
            <section className="main-page__pets pets-listing__container">
                <h2 className="pets-listing__title title">Наши подопечные</h2>
                <PetsList />
                <div className="pets-listing__open-page">
                    <p className="pets-listing__label">Они ищут семью и настоящих друзей!</p>
                    <a href={PETS_ROUTE} className="pets-listing__all-link all-link">
                        <p className="all-link__label">Все подопечные</p>
                        <svg className="all-link__svg" width="91px" height="60px">
                            <Arrow />
                        </svg>
                    </a>
                </div>
            </section>
            <section className="main-page__shelters">
                <h2 className="listing__title title">Приюты</h2>
                <iframe className="main-page__shelters-map" src="https://www.google.com/maps/d/embed?mid=1H_WOZQJV9gMpe2Gt90QAcM7_gTZj3TA&ehbc=2E312F&output=embed" width="900" height="639"></iframe>
                {/* < ShelterList className='listing' /> */}
            </section>
            <section className="donations-listing listing">
                <div className="listing__container">
                    <h2 className="listing__title title">Срочно требуется помощь!</h2>
                    <FundList />
                    <a href={FUNDS_ROUTE} className="listing__all-link all-link">
                        <p className="all-link__label">Смотреть все</p>
                        <svg className="all-link__svg" width="91px" height="60px">
                            <Arrow />
                        </svg>
                    </a>
                </div>
            </section>
            <section className="news-listing listing">
                <div className="listing__container">
                    <h2 className="listing__title title">Новости</h2>
                    <NewsList />
                    <a href={FUNDS_ROUTE} className="listing__all-link all-link">
                        <p className="all-link__label">Смотреть все</p>
                        <svg className="all-link__svg" width="91px" height="60px">
                            <Arrow />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    );
});


export default MainPage;