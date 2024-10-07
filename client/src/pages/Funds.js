import React from "react";
import FundList from "../components/FundList";
import '../styles/global.css'

const Funds = () => {
    return (
        <main>
            <div className="listing__container">
                <h2 className="listing__title title">Сборы средств</h2>
                <FundList />
            </div>
        </main>
    );
}


export default Funds;